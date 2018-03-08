import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-manager',
  templateUrl: './key-manager.component.html',
  styleUrls: ['./key-manager.component.css']
})
export class KeyManagerComponent implements OnInit {
  label = 'Your Yelp Api Key';
  @Input() apiKey;
  @Output() keySaved = new EventEmitter();
  changedKey;
  changeKey(ev) {
    this.changedKey = ev.target.value;
  }
  setApiKey(ev) {
    window.localStorage.setItem('apiKey', this.changedKey);
    this.keySaved.emit();
  }
  deleteApiKey ()  {
    window.localStorage.removeItem('apiKey');
    this.keySaved.emit();
  }
  constructor() { }
  ngOnInit() {
  }
}
