import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  userpassword = '';
  errorMs = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.userpassword);
    if (this.username.trim().length === 0) {
      this.errorMs = 'Username is required';
    } else if (this.userpassword.trim().length === 0) {
      this.errorMs = 'Userpassword is required';
    } else {
      this.errorMs = '';
      let res = this.auth.login(this.username, this.userpassword);
      console.log('i am ressss' + res);
      if (res === 202) {
        this.router.navigate(['home']);
      }
    }
  }
}
