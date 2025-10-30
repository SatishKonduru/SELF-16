import { Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  preserveWhitespaces: true,
  // encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  // myInputValue: any;
  // check = 0;

  // isLoggedIn = false;
  // repeatCount = 5;
  // inputValue = 'RSK';
  // onClick(value: any) {
  //   this.inputValue = value;
  //   this.myInputValue = value;
  //   // this.inputValue.push(value);
  // }
  // ngOnInit() {
  //   setInterval(() => this.check++, 1000);
  // }
  // constructor() {
  //   console.log('Home Constructor called....');
  // }
  constructor(private authService: AuthService) {}
  // loginAsAdmin() {
  //   this.authService.login('admin');
  //   alert('Logged in as Admin ✅');
  // }

  // loginAsUser() {
  //   this.authService.login('user');
  //   alert('Logged in as User ⚠️');
  // }

  // logout() {
  //   this.authService.logout();
  //   alert('Logged out ❌');
  // }
}
