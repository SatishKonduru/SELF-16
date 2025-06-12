import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  preserveWhitespaces: true,
})
export class ViewChildComponent {
  topicName = '@ViewChild()';
  inputValueWithRef: any;
  inputValueWithViewChild: any;
  @ViewChild('input') el: ElementRef;
  @ViewChild('input', { static: true }) inputStaticTrue: ElementRef;
  @ViewChild('input', { static: false }) inputStaticFalse: ElementRef;
  getValueWithRef(el: HTMLInputElement) {
    this.inputValueWithRef = el.value;
  }
  getValueWithViewChild() {
    this.inputValueWithViewChild = this.el.nativeElement.value;
    // this.inputValueWithViewChild = this.inputStaticTrue?.nativeElement?.value; // We will get result and Also available in OnInit
    // this.inputValueWithViewChild = this.inputStaticFalse?.nativeElement?.value; // We will get result but NOT available in OnInit
  }
  ngOnInit() {
    console.log('ngOnInit() called');
    console.log(
      'inputStaticTrue in ngOnInit:',
      this.inputStaticTrue.nativeElement.value
    ); // will be defined
    console.log(
      'inputStaticFalse in ngOnInit:',
      this.inputStaticFalse?.nativeElement?.value
    ); // will be undefined
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
    console.log(
      'inputStaticTrue in ngAfterViewInit:',
      this.inputStaticTrue?.nativeElement?.value
    );
    console.log(
      'inputStaticFalse in ngAfterViewInit:',
      this.inputStaticFalse?.nativeElement?.value
    );
  }
}
