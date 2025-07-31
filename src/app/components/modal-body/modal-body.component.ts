import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.css'],
})
export class ModalBodyComponent {
  bodyMessage = 'Hello from Modal Body!';

  getBodyMessage(): string {
    return this.bodyMessage;
  }
}
