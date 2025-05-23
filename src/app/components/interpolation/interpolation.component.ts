import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  name = 'Satish Konduru';
  age = 45;
  getName() {
    return this.name;
  }
}
