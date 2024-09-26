import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { User } from '@firebase/auth';
import { Auth } from 'firebase/auth';
import { UserService } from '../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,
    private userService: UserService,

  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log()
    return this.userService.getGmailUser().pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          localStorage.setItem('redirectUrl', state.url);
          this.router.navigate(['/login']);
        }
      })
    );
  }


}
