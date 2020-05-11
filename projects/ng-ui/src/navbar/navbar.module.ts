import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  /*navbar utilizes the button atom*/
  imports: [
    ButtonModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
