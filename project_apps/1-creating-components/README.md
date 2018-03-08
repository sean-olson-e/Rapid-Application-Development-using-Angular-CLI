# Create a Component

### What is a component? 
(form the [Angular API Documentation](https://angular.io/api/core/Component))

> Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.

> A component must belong to an NgModule in order for it to be usable by another component or application. To specify that a component is a member of an NgModule, you should list it in the declarations field of that NgModule.

> In addition to the metadata configuration specified via the Component decorator, components can control their runtime behavior by implementing various Life-Cycle hooks.

## Step One: Create a Component & Bind Properties to a Template
The get started on our app, we need a way to save the Yelp API key we'll need to be able to use their API. For the 
purposes of this app we'll use the browser's localStorage API.  So begin by creating a component name 'key-manager'.

### Finished View:
![step one](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/complete1.png)

### Step One Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/1-creating-components/src/snippets/key-manager)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/2-importing-styles-using-built-in-directives/src/app)

## Instructions:

### a: Create the Key-Manager Component
 Using 
the Angular CLI from the root of the application run  

```ng generate component key-manager --spec false```

By default, the Angular CLI will stub out a test module for the component. To simplify things here, we eliminate this by adding the ```--spec false``` flag to the generator command.

#### Anatomy of an Angular Component
The CLI generates three key files that make up the functional component:
* key-manager.component.ts: the component code module
* key-manager.component.html: the component html template
* key-manager.component.css: the component-scoped css file

In addition to generating the component files, the CLI also registers the component with the ```app.module.ts``` file, which controls how the parts of the app fit together.

### b: Review the three parts of the component code module.
An Angular component code module has three basic components:

**1.** an import section that loads the module libraries required by the component

```
import { Component, OnInit } from '@angular/core';
```

**2.** a component class that contains the functionality for the component
```
export class KeyManagerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
``` 

**3.** a TypeScript @Component decorator that adds additional functionality to the component.

```@Component({
     selector: 'app-key-manager',
     templateUrl: './key-manager.component.html',
     styleUrls: ['./key-manager.component.css']
   })

```      

### c1: Wire up the key-manager form template to use one-way property and event binding

#### NOTES: One-way binding in forms follows a simple pattern: 
* form input properties use bracket syntax, ```[value]="property_name"``` 
* form input events use parenthesis, ```(input)="handler($event)"```
* non-form elements use double-brace string interpolation, ```{{property_name}}```  


***Component Template***

```
 <div>
   <label for="api-key">{{label}}: </label>
   <input type="text" name="api-key" id="api-key" [value]="apiKey" (input)="updateValue($event)">
   <button (click)='setApiKey($event)'>Save Key</button>
 </div>
```

***Component Module***
```
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
  updateValue(ev) {
    this.apiKey = ev.target.value;
  }

  setApiKey(ev) {
    window.localStorage.setItem('apiKey', this.apiKey);
  }

  constructor() { }

  ngOnInit() {
    this.apiKey = window.localStorage.getItem('apiKey');
  }
}
```
 
### c2: Wire up the key-manager form template to use two-way property and event binding

#### NOTES: Two-way binding in forms follows a simple pattern: 
* form input properties use bracket syntax, ```[(ngModel)]="property_name"```. 
* but two-way binding requires FormModule be imported into the ```app.module.ts```.

**app.module.ts**
```
...

  import { FormsModule } from '@angular/forms';
  ...
  @NgModule({
    ...
    imports: [
      FormsModule
    ],
    ...
  })
  export class AppModule { }
``` 

**Component Template**
```
  <div>
    <label for="api-key">{{label}}: </label>
    <input type="password" name="api-key" id="api-key" [(ngModel)]="apiKey">
    <button (click)='setApiKey($event)'>Save Key</button>
  </div>
```

**Component Module**
```
  import { Component, OnInit } from '@angular/core';
  
  @Component({
    selector: 'app-key-manager',
    templateUrl: './key-manager.component.html',
    styleUrls: ['./key-manager.component.css']
  })
  export class KeyManagerComponent implements OnInit {
  
    label = 'Yelp Api Key';
    apiKey;
  
    setApiKey(ev) {
      window.localStorage.setItem('apiKey', this.apiKey);
    }
  
    constructor() { }
  
    ngOnInit() {
      this.apiKey = window.localStorage.getItem('apiKey');
    }
  }
```

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
