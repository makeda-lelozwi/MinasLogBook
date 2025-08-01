import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

import { StoryService } from './services/story.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseCharacterComponent } from './character/base-character.component';
import { LandingComponent } from './landing page/landing.component';
import { LandingInfoComponent } from './landing page/info/landing-info.component';
import { LandingCarouselComponent } from './landing page/carousel/landing-carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { BaseViewComponent } from './character/base-view/base-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseCharacterComponent,
    LandingComponent,
    LandingInfoComponent,
    LandingCarouselComponent,
    FormComponent,
    CardComponent,
    BaseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, FormsModule],
  providers: [HttpClient, provideHttpClient(), StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
