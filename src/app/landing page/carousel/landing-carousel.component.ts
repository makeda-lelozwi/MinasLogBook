import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrl: './landing-carousel.component.css',
})
export class LandingCarouselComponent {
  characters: string[] = ['mina', 'tomoko', 'yoneda'];
}
