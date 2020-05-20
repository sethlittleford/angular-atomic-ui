import { 
  Directive, 
  ElementRef, 
  Input, 
  OnInit,
  HostBinding,
  Renderer2
} from '@angular/core';
import { Theme } from './theme';

@Directive({
  selector: '[ngsColor]'
})
export class ColorDirective implements OnInit {
  
  // A directive's data-bound input properties are not set
  // until after construction. Use ngOnInit() to access.
  @Input('ngsColor') customColor: string;
  
  // @HostBinding('style.color') color: string;
  
  constructor(private el: ElementRef, private rndr: Renderer2) { }
  
  ngOnInit(): void { 
    if(this.customColor == 'primary' ||
    this.customColor == 'accent' ||
    this.customColor == 'warn') {
      const theme = new Theme(this.customColor);
      this.presetStyle(theme);
    }
    else {
      this.customStyle(this.customColor);
    } 
  }
  
  private presetStyle(theme: Theme): void {
    this.rndr.setStyle(this.el.nativeElement, 'color', theme.contentColor);
  }
  
  private customStyle(s: string): void {
    this.rndr.setStyle(this.el.nativeElement, 'color', s);
  }
  
}
