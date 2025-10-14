import { Component, ContentChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  myInputValue: any;
  check = 0;

  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = 'RSK';
  onClick(value: any) {
    this.inputValue = value;
    this.myInputValue = value;
    // this.inputValue.push(value);
  }
  ngOnInit() {
    setInterval(() => this.check++, 1000);
  }
  constructor() {
    console.log('Home Constructor called....');
  }
}
