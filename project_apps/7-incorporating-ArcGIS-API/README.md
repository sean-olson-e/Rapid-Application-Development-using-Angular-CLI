# Including The ArcGIS API for JavaScript


## Step Seven: Add a Map Visualization.
It's time to integrate the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript), an enterprise geospatial API.

### Step Six Resources:
* [Code Snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/7-incorporating-ArcGIS-API/src/snippets)
* [Completed Code](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/8-finished-app/src/app)

### Finished View:
![step seven](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/docs/img/step7_complete.png)

## Instructions:

#### a: Install Dependencies
Currently (as of 3/5/2018), we need to install two dependencies to use the ArcGIS API for JavaScript within an 
Angular application: the [`esri-loader`](https://github.com/Esri/esri-loader#usage), a low level service 
that helps load ArcGIS JavaScript API modules (v3.x or v4.x) in non-Dojo applications; and the [ArcGIS 
JavaScript TypeScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript).


In your terminal, run
```
  npm install --save esri-loader
  npm install --save @types/arcgis-js-api
```

#### b: Include the ArcGIS TypeScript typings in the `tsconfig.app.json` file.  Set `"types": ["arcgis-js-api"]`. 


#### c: Implement the Map Visualization, using the Yelp Service -- [see code snippets](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps/7-incorporating-ArcGIS-API/src/snippets).


### Other Resources

For a deeper dive into working with the ArcGIS API for JavaScript, checkout the companion repository to this one [Angular and the ArcGIS API](https://github.com/sean-olson-e/Angular-and-the-ArcGIS-API-for-JavaScript)

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
