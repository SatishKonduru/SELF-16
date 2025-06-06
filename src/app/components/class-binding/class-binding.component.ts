import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
})
export class ClassBindingComponent {
  textColor = 'myTextColor';
  textSize = 'myTextSize';
  myGroupClass = {
    myTextColor: true,
    myTextSize: true,
  };
}
