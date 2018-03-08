import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apiKey;

  getApiKey ()  {
    this.apiKey = window.localStorage.getItem('apiKey');
  }

  updateKey ()  {
    this.getApiKey();
  }

  constructor() { }

  ngOnInit() {
    this.getApiKey();
  }

}
