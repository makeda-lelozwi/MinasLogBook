import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseCharacterComponent } from './character/base-character.component';
import { LandingComponent } from './landing page/landing.component';
import { LandingInfoComponent } from './landing page/info/landing-info.component';
import { LandingCarouselComponent } from './landing page/carousel/landing-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseCharacterComponent,
    LandingComponent,
    LandingInfoComponent,
    LandingCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
