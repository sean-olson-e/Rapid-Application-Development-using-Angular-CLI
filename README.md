# Rapid-Application-Development-using-Angular-CLI
This repository was developed as a self-teaching tool, first presented at the [*Esri Dev Summit 2018* presentation](https://devsummit2018.schedule.esri.com/schedule/433914485) of similar name.
In it you will find resources  to walk you, step-by-step, through the application
development process using Angular and the Angular CLI.  Each of the [project_apps sub-folders](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps)
contains a version of the app at a stage in the development process.  Each sub-folder also contains a README file with
step-by-step instruction and a code snippets folder with the completed code for that step. The goal is to provide users
a hands-on experience with the essential technologies and development patterns of Angular (2+) development.


#### The app we're going to build

![the app](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/blob/master/resources/img/app_screen_shot.jpg)

## Repository contents
* **[/project_apps](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps)**: demonstration app broken down into development steps. Each of the project_apps directories is accompanied by a README file that will walk you through the given implementation.  Within each of the projects_apps code bases, you will find the code for the sample in the ```src/snippets``` folder.
* **[/resources](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/resources)**: miscellaneous resource documents
* **[/yelp_proxy](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/yelp_proxy)**: a simple node proxy used to communicate with the Yelp API

## >>[Launch Presentation Slides](https://sean-olson-e.github.io/Rapid-Application-Development-using-Angular-CLI/#/)

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
