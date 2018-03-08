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
  temp;

  zoomToRestaurant(restaurant) {
    this.temp = 'zooming to ' + restaurant;
  }

  constructor(private yService: YelpService) { }

  ngOnInit() {
    this.restaurants = this.yService.getSearchResults();
    this.yelpSubscription = this.yService.selectedRestaurant.subscribe((id) => {
      const restaurant = this.yService.getRestaurant(id);
      this.zoomToRestaurant(restaurant);
    });
  }
}
