import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[putLabelVisible]'
})
export class PutVisibleDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    console.log(this.el.nativeElement.checked);
    this.el.nativeElement.nextSibling.style.visibility = this.el.nativeElement.checked ? 'visible' : 'hidden';
  }
}
