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
  searchSubscription: any;
  selectSubscription: any;
  mapView;
  defaultPointColor = {a: 1, r: 102, g: 45, b: 145};
  selectedPointColor = {a: 1, r: 237, g: 28, b: 36};

  // this is needed to be able to create the MapView at the DOM element in this component
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  plotRestaurants ()  {
    return loadModules([
      'esri/geometry/Point',
      'esri/symbols/SimpleMarkerSymbol',
      'esri/Graphic',
      'esri/geometry/Extent'
    ])
      .then(([Point, SimpleMarkerSymbol, Graphic, Extent]) => {

        // clear any existing graphics on the map
        if (this.mapView.graphics.length ) {
          this.mapView.graphics.removeAll();
        }

        // add a map point for each restaurant
        this.restaurants.forEach(r => {
          const g = new Graphic({
            geometry: new Point({
              latitude: r.coordinates.latitude,
              longitude: r.coordinates.longitude,
              spatialReference: { wkid: 3857 }
            }),
            symbol: new SimpleMarkerSymbol({
              color: this.defaultPointColor,
              size: 8
            }),
            visible: true,
            attributes: {id: r.id}
          });
          this.mapView.graphics.add(g);
        });

        // set the extent to show the mapped retaurants
        this.mapView.goTo(this.mapView.graphics);

      })
      .catch(err => {
        console.log(
          'an error occured while trying to plot the restaurants on the map: ' +  err);
      });
  }

  zoomToRestaurant(id) {
    const graphic_index = this.mapView.graphics.items.findIndex((g) => {
      return g.attributes.id === id;
    });
    this.mapView.graphics.items.forEach((g, ix) => {
        const graphic = this.mapView.graphics.items[ix];
        if (graphic_index === ix) {
          graphic.symbol.color  = this.selectedPointColor;
          graphic.symbol.size = 12;
        } else {
          graphic.symbol.color  = this.defaultPointColor;
          graphic.symbol.size = 8;
        }
    });

    this.mapView.goTo(this.mapView.graphics.items[graphic_index]);
  }

  constructor(private yService: YelpService) {}

  ngOnInit() {
    this.restaurants = this.yService.getSearchResults();

    // subscribe to the yelp service for notifications when a restarant is selected
    this.searchSubscription = this.yService.updateResults.subscribe(() => {
      this.restaurants = this.yService.getSearchResults();
      this.plotRestaurants();
    });

    // subscribe to the yelp service for notifications when a restarant is selected
    this.selectSubscription = this.yService.selectedRestaurant.subscribe(id => {
      this.zoomToRestaurant(this.yService.getRestaurant(id));
    });

    // initialize  the map
    return loadModules([
      'esri/Map',
      'esri/views/MapView'
    ])
      .then(([Map, MapView]) => {
        const map = new Map({
          basemap: 'streets'
        });

        this.mapView = new MapView({
          container: this.mapViewEl.nativeElement,
          center: [-116.525, 33.8303],
          zoom: 14,
          map: map
        });

        this.mapView.when(
          () => {

          },
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
