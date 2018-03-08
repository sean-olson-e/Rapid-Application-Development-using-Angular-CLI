# Sharing Component Properties with Inputs, Outputs and Custom Events

### Read more about @Input / @Output decorators and EventEmitters
* [@Input() decerator](https://angular.io/api/core/Input), used to share properties with child components
* [@Output() decerator](https://angular.io/api/core/Output), used to create custom events
* [Event Emitter](https://angular.io/api/core/EventEmitter), used to raise custom events

## Step Three: Create a dashboard component that nests the key-manager and the cuisine-type-list

In this section we're going to add a little more intelligence into our UI.  We want to be able to hide the key-manager form once the user 
has entered the key, but allow for the user to change it.  Also, we want to hide the cuisine type list if the user hasn't entered the key.
  
To create this kind of dynamic UI, we need to communicate between components, so one knows the state of the other.
There are a few ways to accomplish this, but in this case we'll nest our key manager and cuisine-type list inside a dashboard component and use shared properties 
and custom events to link them.  

### Step Three Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/3-sharing-properties-using-custom-events/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/4-creating-services/src/app)

### Finished View:
![step three](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step3_complete.png)

## Instructions:

### a: Create a dashboard component

```
  ng g c dashboard --spec false
```

### b: Rework the component templates.
Nest the dashboard in the app module template,

```
  <app-header></app-header>
  <app-dashboard></app-dashboard>
``` 

and the key-manager and the cuisine-type-list under the dashboard.
```
  <app-key-manager [apiKey]="apiKey" (keySaved)="updateKey()"></app-key-manager>
  <app-cuisine-type-list *ngIf="apiKey"></app-cuisine-type-list>
```

Note the use of property and event bindings on the child-component directives. ```(keySaved)="updateKey()`` is a custom event binding
that allows the key-manager component to signal the dashboard that the key has changed and needs to be saved.

### c: Wire up the dashboard component module to manage the storage of the api key

```
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
``` 

### d: Rework the key-manager template, switching from two-way binding to one-way binding
```
  <div class="container">
    <div class="row" *ngIf="apiKey">
      <div class="col-12">
          <button type="submit" class="btn btn-warning float-right" (click)='deleteApiKey($event)'>Reset your Yelp API Key</button>
      </div>
    </div>
    <div class="row" *ngIf="!apiKey">
      <form class="col-12">
        <div class="form-group">
          <h5>Please enter your Yelp API Key</h5>
          <p>Don't have one?  No problem.  Get a free Yelp API key <a href="https://www.yelp.com/developers/v3/manage_app" target="_blank">here.</a></p>
          <input type="password" class="form-control col-12" name="api-key" id="api-key" [value]="apiKey" (input)="changeKey($event)" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" (click)='setApiKey($event)'>Save Key</button>
        </div>
      </form>
    </div>
  </div>
```
### e: Rework the key-manager component module
* import the Input, Output, and EventEmitter module from the @angular/core package
* declare input and output properties
* refactor the set- and delete-key methods to emit the custom ```keySaved``` event 

```
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
``` 


### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
