import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-manager',
  templateUrl: './key-manager.component.html',
  styleUrls: ['./key-manager.component.css']
})
export class KeyManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-manager',
  templateUrl: './key-manager.component.html',
  styleUrls: ['./key-manager.component.css']
})
export class KeyManagerComponent implements OnInit {

  label = 'Yelp Api Key';
  apiKey;

  /*
    The use of separate property and event binding require an event handler to assign
    the updated values to the property. This can be eliminated with two-way binding.
  */
  updateValue = (ev) => {
    this.apiKey = ev.target.value;
  }

  setApiKey = (ev) => {
    window.localStorage.setItem('apiKey', this.apiKey);
  }

  constructor() { }

  ngOnInit() {
    this.apiKey = window.localStorage.getItem('apiKey');
  }
}
