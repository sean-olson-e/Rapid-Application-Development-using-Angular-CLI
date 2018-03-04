# Rapid-Application-Development-using-Angular-CLI
This repository was developed to support the [*Esri Dev Summit 2018* presentation](https://devsummit2018.schedule.esri.com/schedule/433914485) of similar name. This repository provides code samples that will walk you through Angular CLI basics, helping you to quickly standup an Angular app that uses the ArcGIS API for JavaScript. Working through the project_apps samples, you’ll create an app, generate components, implement data binding, handle form inputs, create services, set up routing, implement the ArcGIS API for JavaScript and more.

## Repository contents
* **[/docs](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/docs)**: presentation slides
* **[/project_apps](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps)**: demonstration app broken down into development steps. Each of the project_apps directories is accompanied by a README file that will walk you through the given implementation.  Within each of the projects_apps code bases, you will find the code for the sample in the ```src/snippets``` folder.
* **[/resources](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/resources)**: miscellaneous resource documents
* **[/yelp_proxy](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/yelp_proxy)**: a simple node proxy used to communicate with the Yelp API

## Getting started

```bash
# one-time only when cloning this repo,
# if you don't already have the Angular CLI installed
npm install -g @angular/cli

# run any of the project apps
cd ./project_apps/<your-choice>

# review the project_app's readme file for step-by-step instructions

# one-time only
npm install

# every time you want to begin serving/watching
ng serve

# every time you want to build
ng build --base-href ./


# running the Yelp proxy
cd ./yelp_proxy/
npm install
npm start

```

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
