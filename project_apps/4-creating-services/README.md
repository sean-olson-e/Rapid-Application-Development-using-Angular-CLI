# Creating & Using Services
One key to a successful Angular application is the intelligent use of services. At first, the name ***services*** might sound
vague or a bit abstract, but they're really not.  A service is merely JavaScript class that can be used by one or components.  What goes in a 
class is completely up to you, determined by the needs of your application.  

## Step Four: Create a service to manage the cuisine-type options
Currently, the cuisine-type-list is lost every time the browser is refreshed, so we need to save the data, somewhere.  We don't have a datbase connected 
to our app, so we'll mock one up using the localStorage API of the browser, just as we did for the key-manager.  To support the use of this data across 
components, we'll encapsulate it within a class. 

### Step Four Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/4-creating-services/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/5-configuring-routes/src/app)

### Finished View:
![step four](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step4_complete.png)

## Instructions:

### a: Using the Angular CLI generate a new service class.
```
  ng generate service cuisine-type --spec false --flat true.
```

Create a ***services*** directory under the app directory, and drag your newly created cuisine-type service into it.

### b: Configure the ```app.module.ts``` file to adding the CuisineTypeService to the list of providers.

```
  ...
  
  import { CuisineTypeService } from './services/cuisine-type.service';
  
  ... 
  
  @NgModule({
    ...
    providers: [
      CuisineTypeService
    ],
    ...
  })
  export class AppModule { }
```

By adding a class to the provider list, Angular will manage creating an instance of the service class and share it with all
the components that import it.  This process of sharing a service with components is referred to as ***Dependency Injection***. 

### c: Import the service into the CuisineTypeComponent class module

```
  import { Component, OnInit } from '@angular/core';
  import { CuisineTypeService } from '../services/cuisine-type.service';
  
  @Component({
    selector: 'app-cuisine-type-list',
    templateUrl: './cuisine-type-list.component.html',
    styleUrls: ['./cuisine-type-list.component.css']
  })
  export class CuisineTypeListComponent implements OnInit {
  
    ...
  
    constructor(ctService: CuisineTypeService) {
      this.ctService = ctService;
    }
  
    ngOnInit() {
      this.cuisineTypes = this.ctService.getCuisineTypes();
    }
  }

```
 

### d: Refactor the CuisineTypeComponent module CuisineTypeService, moving the CRUD functionality from the component to the service.

```
  import { Injectable } from '@angular/core';
  
  @Injectable()
  export class CuisineTypeService {
  
    constructor() {
      this.cuisineTypes = window.localStorage.getItem('cuisineTypes')
        ? JSON.parse(window.localStorage.getItem('cuisineTypes'))
        : ['Chinese', 'Indian', 'Italian', 'Thai'];
     }
  
    cuisineTypes: string[];
  
    getCuisineTypes ()  {
      return this.cuisineTypes;
    }
  
    addNewType = (type: string) => {
      if (this.isNewType(type) && type !== '') {
        this.cuisineTypes.push(type);
        this.sortTypes();
        this.saveCuisineTypes();
      }
    }
  
    editType = (stale_type: string, fresh_type: string) => {
      if (fresh_type !== '' && fresh_type !== stale_type && this.isNewType(fresh_type)) {
        this.cuisineTypes[this.cuisineTypes.indexOf(stale_type)] = fresh_type;
        this.sortTypes();
        this.saveCuisineTypes();
      }
    }
  
    deleteType = (ix: number) => {
      this.cuisineTypes.splice(ix, 1);
      this.sortTypes();
      this.saveCuisineTypes();
    }
  
    private saveCuisineTypes ()  {
      window.localStorage.setItem('cuisineTypes', JSON.stringify(this.cuisineTypes));
    }
  
    private sortTypes ()  {
      this.cuisineTypes.sort((a: string, b: string) => {
        return a < b ? -1 : 1;
      });
    }
  
    private isNewType = (type) => {
      const new_type = type.toLocaleLowerCase();
      for (let i = 0; i < this.cuisineTypes.length; i++) {
        if (this.cuisineTypes[i].toLowerCase() === new_type) {
          return false;
        }
      }
      return true;
    }
  
  }

```

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
