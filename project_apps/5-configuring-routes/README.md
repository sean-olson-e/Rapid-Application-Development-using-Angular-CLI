# Configuring Routes
The Angular Router enables navigation from one view to the next as users perform application tasks. You can read more about Routing and Navigation [here](https://angular.io/guide/router). Routing is often requied as simple apps grow into more complex apps. 

## Step Five: Add routing to support a more-developed UI

### Step Five Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/5-configuring-routes/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/6-using-http-connections/src/app)

### Finished View:
![step five](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step5_complete.png)

## Instructions:

### a: Create a service to manage the yelp key and api calls
1. Generate a Yelp service -- run **``` ng g s yelp --flat true --spec false ```** from the Angular CLI.
2. Add the new ```yelp.service.ts``` file to the services directory
3. In the app module component file (```app.module.ts```), import the new Yelp Service and add it to the list of providers

```
  import { YelpService } from './services/yelp.service';

  ...

  providers: [
    CuisineTypeService,
    YelpService
  ],
```

### b: Build three new components to support routing and navigation
* ``` ng g c console --spec false```  
* ``` ng g c search-panel --spec false ```  
* ``` ng g c map-panel --spec false ```  

### c: Reorganize the component structure
1. Remove the key-manager component from the dashboard component template and nest it under the app component template.
2. Add the console and key-manager components to the app component template.
3. Remove the dashboard component from the app component template, and nest it within the console component template.
4. Add the directives for the search and map components to the dashboard template

### d: Refactor the key-manager logic to use the YelpService 
1. Inject Yelp Service into the app and key manager component modules.
2. Refactor the save/reset methods in the key-manager component module to use YelpService module.
3. Refactor the key managers event emitter to raise the event to the app module.
4. Refactor the app module to bind the api-key to the property to the key-manger.
5. Use the ng-If directive to show/hide the console module, dependant if the user has an API key.

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

### f: Add navigation elements

1. Add buttons to the key-manager template to function as navigation controls
2. Configure the routerLink and activeRouterLink attributes on the buttons

```
    <div class="col-12 nav-panel">
        <button  class="btn nav-button" routerLink="/restaurants"  routerLinkActive="btn-primary">Find Retaurants</button>
        <button class="btn nav-button" routerLink="/foods"  routerLinkActive="btn-primary">Favorite Foods</button>
        <button type="submit" class="btn btn-reset float-right" (click)='resetKey()'>Reset your Yelp API Key</button>
    </div>
```    

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
