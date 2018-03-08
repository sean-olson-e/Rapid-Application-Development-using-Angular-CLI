import { Component } from '@angular/core';
import { YelpService } from './services/yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiKey;
  yService: YelpService;

  getKey ()  {
    this.apiKey = this.yService.getApiKey();
  }

  constructor(yService: YelpService) {
    this.yService = yService;
    this.getKey();
  }

}
