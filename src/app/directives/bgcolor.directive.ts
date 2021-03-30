import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective implements OnInit, OnChanges {
  @Input()
  appBgcolor!: string;
  constructor(public el: ElementRef) {

  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appBgcolor || 'red';
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.appBgcolor) {
      this.el.nativeElement.style.backgroundColor = this.appBgcolor || 'red';
    }
  }

}
