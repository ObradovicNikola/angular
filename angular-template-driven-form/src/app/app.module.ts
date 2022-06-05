import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
