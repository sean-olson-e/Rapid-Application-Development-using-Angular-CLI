import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-manager',
  templateUrl: './key-manager.component.html',
  styleUrls: ['./key-manager.component.css']
})
export class KeyManagerComponent implements OnInit {

  label = 'Your Yelp Api Key';
  apiKey;

  setApiKey(ev) {
    window.localStorage.setItem('apiKey', this.apiKey);
  }

  constructor() { }

  ngOnInit() {
    this.apiKey = window.localStorage.getItem('apiKey');
  }

}
