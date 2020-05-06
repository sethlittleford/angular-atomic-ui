import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarModule } from '@sethlittleford/ng-ui';
import { ThemesModule } from '@sethlittleford/ng-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    ThemesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
