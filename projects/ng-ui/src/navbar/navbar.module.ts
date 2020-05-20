import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { NavbarComponent } from './navbar.component';
import { CustomizationModule } from '../customization/customization.module';


@NgModule({
  declarations: [NavbarComponent],
  /*navbar utilizes the button atom*/
  imports: [
    ButtonModule,
    CustomizationModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
