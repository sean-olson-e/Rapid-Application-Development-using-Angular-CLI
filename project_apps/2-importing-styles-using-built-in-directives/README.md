# Importing Styles and Using Angular's Built-In Directives
There are many built-in directives in Angular, designed to assist with common tasks.  You can browse the. in [The Angular API](https://angular.io/api)

### Commonly Used Directives
* [ngIf](https://angular.io/api/common/NgIf) -- Conditionally includes a template based on the value of an expression.
* [ngFor / NgForOf](https://angular.io/api/common/NgForOf) -- The NgForOf directive instantiates a template once per item from an iterable. The context for each instantiated template inherits from the outer context with the given loop variable set to the current item from the iterable.
* [ngStyle](https://angular.io/api/common/NgStyle) --The styles are updated according to the value of the expression evaluation.
* [ngClass](https://angular.io/api/common/NgClass) -- The CSS classes are updated as follows, depending on the type of the expression evaluation.

## Step Two: Create Components and Import Global Styles; 

### Finished View:
![step two](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step2_complete.png)

### Step Two Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/2-importing-styles-using-built-in-directives/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/3-sharing-properties-using-custom-events/src/app)

## Instructions:

### a: Import Bootstrap and Font Awesome Styles
* use npm to install Bootstrap: 
```
  npm install bootstrap --save
``` 
* use npm to install Font Awesome: 
```
  npm install font-awesome --save
```
* import the Bootstrap and Font Awesome css files through the styles property in the .angular-cli.json file


      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.min.css"
      ],

### b: Restyle the key-manager component template
* replace the markup in the key-manager component template with this snippet (also in src/snippets/key-manager.components.txt)

```
  <div class="container">
    <div class="row">
      <form class="col-6">
        <div class="form-group">
          <label for="api-key">{{label}}</label>
          <input class="form-control col-12" type="text" name="api-key" id="api-key" [(ngModel)]="apiKey" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" (click)='setApiKey($event)'>Save Key</button>
        </div>
      </form>
    </div>
  </div>
```

### c: Create a header component
* from the terminal create the header component.
 ```
  ng generate component header --spec false
```
  
* add a "title" property to the the header component module (header.component.ts) and set it.
```
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
  export class HeaderComponent implements OnInit {
    title = 'Where to Eat?';
    constructor() { }
    ngOnInit() {
    }
  }
```
* add an h1 tag to the header component template (header.component.html) and bind the title property inside the tag using double braces (string interpolation)
```
<div class="container">
  <div class="row ">
    <h1 class="col-12 header">{{title}}</h1>
  </div>
</div>
```

### d: Create a cuisine type list component
* from the terminal create a cuisine-type-list component,
 ```
  ng generate component cuisine-type-list --spec false
```
  
* copy the code from [the snippets file](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/project_apps/2-importing-styles-using-built-in-directives/src/snippets/cuisine-type-list.component.ts.txt) into the cuisine-type-list 

* copy markup from [the snippets file](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/project_apps/2-importing-styles-using-built-in-directives/src/snippets/cuisine-type-list.component.html.txt) into the cuisine-type-list template

### e: Add the header and cuisine-type-list component templates to the app component template(app.component.html)
 
 ```
 <app-header></app-header>
 <app-key-manager></app-key-manager>
 <app-cuisine-type-list></app-cuisine-type-list>
 ```


### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
