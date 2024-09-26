import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { User } from '@firebase/auth';
import { Observable, switchMap } from 'rxjs';
import { AppUser } from 'src/app/shared/models/app-user';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: User | null = null;

  constructor(public auth: Auth, ) {
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  logout() {
    return signOut(this.auth);
  }

 

}



