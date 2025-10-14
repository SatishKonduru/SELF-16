import { Component, ContentChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ContentChild(DemoComponent) dMsg!: DemoComponent;
  // isLoggedIn = false;
  // repeatCount = 5;
  inputValue = 'RSK';
  onClick(value: any) {
    this.inputValue = value;
    // this.inputValue.push(value);
  }
  constructor() {
    console.log('Home Constructor called....');
  }
  ddMsg: string = '';
  ngAfterContentInit() {
    console.log("HOME's AfterContentInit() dMsg: ", this.dMsg.demoMsg);
    this.ddMsg = this.dMsg.demoMsg;
  }
  // ddMsg = this.dMsg.demoMsg;
  ngAfterContentChecked() {
    console.log("HOME's ngAfterContentChecked() dMsg: ", this.dMsg.demoMsg);
  }
}
