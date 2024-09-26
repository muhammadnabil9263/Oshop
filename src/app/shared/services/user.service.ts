import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable, switchMap } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { AppUser } from 'src/app/shared/models/app-user';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: Auth, private firebaseService: FirebaseService) {

  }

  // accsess to the userGmail object
  getGmailUser(): Observable<User | null> {
    return new Observable(subscriber => {
      this.auth.onAuthStateChanged(subscriber);
    });
  }
  // accsess to the user object saved in the firebase database
  getApptUser(): Observable<AppUser | null> {
    return this.getGmailUser().pipe(switchMap(currentUser => {
      return this.firebaseService.getData<AppUser>('/users/' + currentUser?.uid)
    }))
  }
}
