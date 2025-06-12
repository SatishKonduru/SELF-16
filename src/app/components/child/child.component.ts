import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  childMessage = 'Hello from Child!';

  showMessage() {
    alert('👋 Child Method Called from Parent!');
  }
}
