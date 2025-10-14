import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  @Input() message: any;
  constructor() {
    console.log('Demo Constructor called');
    console.log('Message value in Demo Constrctor: ', this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Demo's ngOnChanges called...");
    console.log('Message value in Demo ngOnInit(): ', this.message);
    console.log('Changes: ', changes);
  }
  ngOnInit() {
    console.log("Demo's OnInit called...");
    console.log("Message Value in Demo's OnInit: ", this.message);
    // console.log(
    //   "Demo's AfterContentInit() paragraph: ",
    //   this.paragraph.nativeElement.innerHTML
    // );
  }
  ngAfterContentInit() {
    console.log("Demo's AfterContentInit() called");
    console.log(
      "Demo's AfterContentInit() paragraph: ",
      this.paragraph.nativeElement.innerHTML
    );
  }
  @ContentChild('para') paragraph: ElementRef;
  demoMsg = 'Hi From Demo';
}
