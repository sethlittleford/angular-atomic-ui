import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { ThemingModule } from '../directives/theming.module';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    ThemingModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }