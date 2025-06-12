import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  topicName = '@ViewChild() with Component Reference';
  constructor(private cdr: ChangeDetectorRef) {}
  // @ViewChild(ChildComponent) childComp: ChildComponent;
  @ViewChild('childHost', { read: ViewContainerRef }) vcr: ViewContainerRef;
  childRef: ComponentRef<ChildComponent>;
  childMessage: string;
  ngAfterViewInit() {
    // console.log('Child Message (from Parent):', this.childComp.childMessage);
    // Dynamically create ChildComponent (not displayed)
    this.childRef = this.vcr.createComponent(ChildComponent);
    // You can now use this.childRef.instance to access child logic

    // Access child property and assign to local variable
    this.childMessage = this.childRef.instance.childMessage;
    // ✅ Fix the ExpressionChangedAfterItHasBeenCheckedError
    this.cdr.detectChanges();
  }

  callChildMethod() {
    // this.childComp.showMessage();
    // if (this.childComp) {
    //   this.childComp.showMessage();
    // } else {
    //   alert('Child component is not available in the view.');
    // }
    if (this.childRef?.instance) {
      this.childRef.instance.showMessage(); // Call method in child
    } else {
      alert('Child not created yet');
    }
  }
}
