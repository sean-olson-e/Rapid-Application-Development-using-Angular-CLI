# Using HTTP Connections
Citing from the [Angular documentation](https://angular.io/guide/http), 2/19/2018

>Most front-end applications communicate with backend services over the HTTP protocol. Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API.

>The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers. Additional benefits of HttpClient include testability features, typed request and response objects, request and response interception, Observable apis, and streamlined error handling.

## Step Six: Include Http Connectivity

### Step Six Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/6-using-http-connections/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/7-incorporating-ArcGIS-API/src/app)

### Finished View:
![step six](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step6_complete.png)

## Instructions:

#### **NOTE:** Because Yelp does not allow access for cross-origin resource sharing (CORS), we are unable to query the api directly from the browser.  To provide support for this demonstration app, a yelp-proxy service is provided.  You will find it in the root of this repository.  Lauching the service is easy:
1. Open a console inside the yelp-proxy folder
2. Install the node modules: **```npm install```**
3. Launch the server: **```npm start```**


### a: Create new components for the search panel
* ```ng g c search-control --spec false```
* ```ng g c search-results --spec false```
* see code snippets for code details

### b: Bring the HttpClient module into the app
* In the app module (```**app.module.ts**```) the Angular HttpClient module and add it to the imports list

```
  import { HttpClientModule } from '@angular/common/http';

  ...
  imports: [
    BrowserModule,
    HttpClientModule
  ],

```

### c: Wire up the YelpService
**1.** Import the HttpClient module and the RxJS module into the YelpService module.

```
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
  ...

```
**2.** Create an instance of the HttpClient

```
  constructor(private http: HttpClient) {}

```
**3.** Create an observable in the YelpService module that will notify other app components when the search results have changed

```
  updateResults = new Subject<void>();

```

**4.** Create a public search method

```
  searchYelp(params) {
    const url =  'http://localhost:3000/yelp?apikey=' + this.getApiKey() + '&categories=' + params.type + '&location=' + params.location;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((resp) => {
        const results = JSON.parse(String(resp));
         if (results.errors.length) {
            reject(results.errors[0].error);
            this.searchResults = [];
            this.updateResults.next();
            return;
         }
         this.searchResults = results.data.businesses.map((business) => {
           return {
             name: business.name,
             rating: business.rating,
             address: business.location.display_address,
             phone: business.display_phone,
             url: business.url,
             closed: business.is_closed,
             coordinates: business.coordinates
           };
         });
        resolve();
        this.updateResults.next();
      });
    });
  }

```


### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
