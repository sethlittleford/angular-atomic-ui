import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CustomizationModule } from '../customization/customization.module';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CustomizationModule
  ],
  exports: [ButtonComponent]
})
export class ButtonModule { }