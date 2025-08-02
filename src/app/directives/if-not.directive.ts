import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
})
export class IfNotDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}
  @Input() set appIfNot(condition: boolean) {
    if (!condition) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
