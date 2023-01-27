import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageFormComponent } from './home-page-form/home-page-form.component';
import { GameComponent } from './game/game.component';
// import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageFormComponent,
    GameComponent,
    // EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
