import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { User } from 'firebase/auth';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User | null = null;

  constructor(public authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute, private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.userService.getGmailUser().subscribe(user => {
      this.user = user;
    });
  }

  async saveData() {
    try {
      await this.firebaseService.saveData('/users/' + this.user?.uid,
        { name: this.user?.displayName, email: this.user?.email, isAdmin: true });
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }


  login() {
    this.authService.loginWithGoogle().then(() => {
      this.saveData()
      const redirectUrl = localStorage.getItem('redirectUrl') || '/';
      this.router.navigate([redirectUrl]);
      localStorage.removeItem('redirectUrl');
    });
  }


}
