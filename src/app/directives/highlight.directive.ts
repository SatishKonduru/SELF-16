import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // private highlightColor: string = 'yellow';
  // @Input() set appHighlight(color: string | '') {
  //   this.highlightColor = color?.trim() || 'yellow';
  // }
  // constructor(private el: ElementRef) {}
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.el.nativeElement.style.backgroundColor = this.highlightColor;
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.style.backgroundColor = '';
  // }

  private highlightColor: string = 'yellow';
  @Input() set appHighlight(color: string | '') {
    this.highlightColor = color?.trim() || 'yellow';
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Highlight color:', this.highlightColor);
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }
}
