import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { AppUser } from 'src/app/shared/models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {


  database: any;

  gmailUser: User | null = null;
  appUser:AppUser |null =null;
  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.userService.getGmailUser().subscribe(user => {
      this.gmailUser = user;
    });

    this.userService.getApptUser().subscribe(user => {
      this.appUser = user;
    });
  
  }


  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }



}


