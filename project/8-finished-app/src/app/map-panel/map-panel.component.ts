import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map-panel',
  templateUrl: './map-panel.component.html',
  styleUrls: ['./map-panel.component.css']
})
export class MapPanelComponent implements OnInit {

  restaurants: any[] = [];
  yelpSubscription;
  temp;
  mapView: __esri.MapView;

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  zoomToRestaurant = restaurant => {
    this.temp = 'zooming to ' + restaurant;
  }

  constructor(private yService: YelpService) {}

  ngOnInit() {
    this.restaurants = this.yService.getSearchResults();

    // subscribe to the yelp service for notifications when a restarant is selected
    this.yelpSubscription = this.yService.selectedRestaurant.subscribe(id => {
      const restaurant = this.yService.getRestaurant(id);
      this.zoomToRestaurant(restaurant);
    });

    // initialize  the map
    return loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'])
      .then(([Map, MapView, Graphic]) => {
        const map: __esri.Map = new Map({
          basemap: 'streets'
        });

        this.mapView = new MapView({
          container: this.mapViewEl.nativeElement,
          center: [-116.525, 33.8303],
          zoom: 14,
          map: map
        });

        this.mapView.when(
          () => {},
          err => {
            console.log(err);
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }
}
