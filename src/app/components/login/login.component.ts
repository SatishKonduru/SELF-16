import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) {}

  // onLogin() {
  //   const success = this.authService.login(this.username, this.password);
  //   if (success) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Invalid credentials!');
  //   }
  // }
}
