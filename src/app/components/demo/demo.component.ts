import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  @Input() message: string[];
  constructor() {
    console.log('Demo Constructor called');
    console.log('Message value in Demo Constrctor: ', this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Demo's ngOnChanges called...");
    console.log('Message value in Demo ngOnInit(): ', this.message);
    console.log('Changes: ', changes);
  }
}
