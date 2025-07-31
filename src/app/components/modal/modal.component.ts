import { Component, ContentChild } from '@angular/core';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalBodyComponent } from '../modal-body/modal-body.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ContentChild(ModalHeaderComponent)
  headerComponent?: ModalHeaderComponent;
  @ContentChild(ModalBodyComponent) bodyComponent?: ModalBodyComponent;
  @ContentChild(ModalFooterComponent)
  footerComponent?: ModalFooterComponent;

  headerAvailable: boolean = false;
  bodyAvailable: boolean = false;
  footerAvailable: boolean = false;
  bodyMessage: string = '';
  ngAfterContentInit(): void {
    this.headerAvailable = !!this.headerComponent;
    this.bodyAvailable = !!this.bodyComponent;
    this.footerAvailable = !!this.footerComponent;
  }

  getBodyMessage() {
    if (this.bodyComponent) {
      this.bodyMessage = this.bodyComponent.getBodyMessage();
    }
  }
}
