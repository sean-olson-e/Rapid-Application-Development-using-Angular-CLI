import { Component, OnInit } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

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
