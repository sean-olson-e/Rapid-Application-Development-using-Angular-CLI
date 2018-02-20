import { Component, OnInit } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent implements OnInit {

  restaurants: any[] = [];
  yelpSubscription;

  constructor(private yService: YelpService) { }

  ngOnInit() {
    this.restaurants = this.yService.getSearchResults();
    this.yelpSubscription = this.yService.updateResults.subscribe(() => {
      this.restaurants = this.yService.getSearchResults();
    });
  }
}
