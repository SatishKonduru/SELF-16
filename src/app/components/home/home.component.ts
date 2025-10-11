import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = ['RSK'];
  onClick(value: any) {
    // this.inputValue = [value];
    this.inputValue.push(value);
  }
  constructor() {
    console.log('Home Constructor called....');
  }
}
