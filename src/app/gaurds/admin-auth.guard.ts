import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, of, switchMap, take, tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { FirebaseService } from '../shared/services/firebase.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { UserService } from '../shared/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router, private firebaseService: FirebaseService) {
  }
  userid: any
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userService.getApptUser().pipe(
          map(appUser => {
            console.log(appUser?.isAdmin);
            return !!appUser?.isAdmin; // return true if appUser exists, false otherwise
          })
        );
      }
    ;
  }



