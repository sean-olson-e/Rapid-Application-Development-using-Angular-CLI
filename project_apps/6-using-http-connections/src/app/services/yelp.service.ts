import { Injectable } from '@angular/core';

@Injectable()
export class YelpService {
  getApiKey ()  {
    return window.localStorage.getItem('apiKey') || '';
  }
  saveApiKey(key: string) {
    window.localStorage.setItem('apiKey', key);
  }
  deleteApiKey ()  {
    window.localStorage.removeItem('apiKey');
  }
  constructor() {}
}
