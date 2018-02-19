# Configuring Routes
The Angular Router enables navigation from one view to the next as users perform application tasks. You can read more about Routing and Navigation [here](https://angular.io/guide/router). Routing is often requied as simple app grow into more complex apps, often requiring refactoring of your app. 

## Project Step #5: Add Routing to support a more-developed UI

### a: Create a service to manage the yelp key and api calls
* Run ng g s yelp --flat true --spec false from the Angular CLI to generate the service class.
* Add the new yelp.service.ts file to the services directory
* In the app module component file (app.module.ts), import the new Yelp Service and add it to the list of providers

```
  import { YelpService } from './services/yelp.service';

  providers: [
    CuisineTypeService,
    YelpService
  ],
```

### b: Build three new components to support routing and navigation
* ng g c console --spec false  
* ng g c search-panel --spec false  
* ng g c map-panel --spec false  

### c: Reorganize the component structure
* Remove the key-manager component from the dashboard component template.
* Remove the dashboard component from the app component template.
* Add the console and key-manager components to the app component template.

### d: Refactor the key-manager logic to use the YelpService 
* Inject Yelp Service into the app and key manager component modules.
* Refactor the save/reset methods in the key-manager component module to use YelpService module
* Refactor the key managers event emitter to raise the event to the app module
* Refactor the app module to bind the api-key to the property to the key-manger
* Use the ng-If directive to show/hide the console module, dependant if the user has an API key.

### e: Add routing to your application
* Import the Router Module into the app module (app.module.ts), add an array to define the routes, and add routes to imports list
```
  import { RouterModule } from '@angular/router';

  ...

 const routes = [
  { path: 'restaurants', component: DashboardComponent },
  { path: 'foods', component: CuisineTypeListComponent },
  { path: '**', redirectTo: '/restaurants' }
  ];

  ...

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
```

### f: Add Navigation Elements

* Add buttons to the key-manager template to function as navaigation contols
* Configure the routerLink and activeRouterLink attributes on the buttons

### g: Rework the dashboard template
* Add the serach-panel and map-panel directives to the dashboard template

### Licensing

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
