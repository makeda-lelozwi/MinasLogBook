import { Component } from '@angular/core';
import {   faBarsProgress,
  faCar,
  faChartLine,
  faLocationDot,
  faMicrophone,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MinasLog';
  micLogo = faMicrophone;
  bookmarkLogo = faStar;
  progress = faBarsProgress;
  location = faLocationDot;
  car = faCar;
  chartLine = faChartLine;
 
}
