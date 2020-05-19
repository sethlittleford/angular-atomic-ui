import { 
  Directive, 
  ElementRef, 
  Input, 
  OnInit,
  HostBinding,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[ngsColor]'
})
export class ColorDirective implements OnInit {
  
  // A directive's data-bound input properties are not set
  // until after construction. Use ngOnInit() to access.
  @Input('ngsColor') customColor: string;
  
  @HostBinding('style.background-color') color: string;
  
  
  constructor(private el: ElementRef, private rndr: Renderer2) {
    this.color = 'pink';
  }
  
  ngOnInit(): void {
    if(this.el.nativeElement instanceof HTMLButtonElement) {
      this.setColor(this.customColor || 'red')
    }
  }
  
  private setColor(newColor: string): void {
    this.rndr.setStyle(this.el.nativeElement, 'color', newColor);
  }
  
}
