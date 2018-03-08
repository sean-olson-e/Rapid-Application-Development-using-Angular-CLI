import { Component, OnInit, Input } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() restaurants;

  selectRestaurant(id) {
    this.yService.loadRestaurant(id);
  }

  constructor(private yService: YelpService) { }

  ngOnInit() {
  }

}

