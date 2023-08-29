import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, userpassword: string) {
    if (username === 'arif' && userpassword === '12345') {
      return 202;
    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['empw']);
  }
}
