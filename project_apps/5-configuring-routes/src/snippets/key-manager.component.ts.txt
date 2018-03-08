import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YelpService } from '../services/yelp.service';

@Component({
  selector: 'app-key-manager',
  templateUrl: './key-manager.component.html',
  styleUrls: ['./key-manager.component.css']
})
export class KeyManagerComponent implements OnInit {

  label = 'Your Yelp Api Key';
  @Input() apiKey;
  @Output() updatedKey = new EventEmitter();
  yService: YelpService;
  keyUpdate;

  updateKey(ev) {
    this.keyUpdate = ev.target.value;
  }
  setApiKey(ev) {
    this.yService.saveApiKey(this.keyUpdate);
    this.updatedKey.emit();
  }

  resetKey ()  {
    this.yService.saveApiKey('');
    this.updatedKey.emit();
  }

  constructor(yService: YelpService) {
    this.yService = yService;
   }

  ngOnInit() {
  }

}
