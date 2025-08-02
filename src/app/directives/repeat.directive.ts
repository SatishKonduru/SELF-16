import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input() set appRepeat(count: number) {
    this.view.clear();
    for (let i = 0; i < count; i++) {
      this.view.createEmbeddedView(this.template);
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}
}
