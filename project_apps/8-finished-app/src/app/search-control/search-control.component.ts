import { Component, OnInit} from '@angular/core';
import { YelpService } from '../services/yelp.service';
import { CuisineTypeService } from '../services/cuisine-type.service';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.css']
})
export class SearchControlComponent implements OnInit {

  zip = '92262';
  selectedType;
  cuisineTypes: string[] = [];

  setSelectedType(ev) {
    this.selectedType = ev.target.value;
  }

  search ()  {

    if ( this.zip.match(/\d{5}/) === null ){
      alert('please enter a five-digit zip');
      return;
    }

    const params = {
      location: this.zip,
      type: this.selectedType || 'Italian'
    };

    this.yService.searchYelp(params)
      .then(() => {
      })
      .catch((err) => {
        alert(err);
      });
  }

  constructor(private yService: YelpService, private ctService: CuisineTypeService) {
   }

  ngOnInit() {
    this.cuisineTypes = this.ctService.getCuisineTypes();
  }

}
