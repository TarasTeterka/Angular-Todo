import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

  constructor(private el: ElementRef) { }

   @HostListener ('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow' );
   }

   @HostListener ('mouseleave') onMouseLeave() {
    this.highlight(null);
   }

   private highlight(color: string = 'yellow'): void {
     this.el.nativeElement.style.backgroundColor = color;
   }
}



// @HostListener ('mouseenter') onMouseEnter() {
//   this.el.nativeElement.style.backgroundColor = this.highlightColor || 'yellow';

//  }

//  @HostListener ('mouseleave') onMouseLeave() {
//   this.el.nativeElement.style.backgroundColor = null;
//  }
