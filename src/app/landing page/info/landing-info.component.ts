import {   faBarsProgress,
  faCar,
  faChartLine,
  faLocationDot,
  faMicrophone,
  faStar,
} from '@fortawesome/free-solid-svg-icons';import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-info',
  templateUrl: './landing-info.component.html',
  styleUrl: './landing-info.component.css',
})
export class LandingInfoComponent {

  micLogo = faMicrophone;
  bookmarkLogo = faStar;
  progress = faBarsProgress;
  location = faLocationDot;
  car = faCar;
  chartLine = faChartLine;
}
