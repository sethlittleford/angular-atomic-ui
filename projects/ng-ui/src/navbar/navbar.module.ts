import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { NavbarComponent } from './navbar.component';
import { ThemingModule } from '../directives/theming.module';


@NgModule({
  declarations: [NavbarComponent],
  /*navbar utilizes the button atom*/
  imports: [
    ButtonModule,
    ThemingModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
