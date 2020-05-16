import { 
  Directive, 
  ElementRef, 
  Input, 
  OnInit
} from '@angular/core';

@Directive({
  selector: '[ngsColor]'
})
export class ColorDirective implements OnInit {
  
  // A directive's data-bound input properties are not set
  // until after construction. Use ngOnInit() to access.
  @Input('ngsColor') color: string;
  
  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
    if(this.el.nativeElement instanceof HTMLButtonElement) {
      this.setColor(this.color || 'red')
    }
  }
  
  private setColor(newColor: string): void {
    this.el.nativeElement.style.backgroundColor = newColor;
  }
  
}
