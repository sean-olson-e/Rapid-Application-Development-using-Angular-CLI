# Rapid-Application-Development-using-Angular-CLI
This repository was developed to support the [*Esri Dev Summit 2018* presentation](http://www.esri.com/events/devsummit/agenda?adumkts=branding&aduc=advertising&adum=ppc&aduSF=google&utm_Source=conference&aduca=m18devsummit&aduco=ppc_brand_sitelink&adut=agenda&aducp=esri_corp_events&adupt=devsummit) of similar name. This repository provides code samples that will walk you through Angular CLI basics to quickly standup an Angular app that uses the ArcGIS API for JavaScript. Working through these app in sequence you’ll create an app, generate components and services, implement the ArcGIS API for JavaScript, leverage two-way data binding, handle form inputs, connect to APIs through http, set up routing and more.

## Repository contents
* **[/docs](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/docs)**: presentation slides
* **[/project_apps](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/project_apps)**: demonstration app broken down into development steps. Each of the project_apps directories is accompanied by a README file that will walk you through the given implementation.
* **[/resources](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/resources)**: miscellaneous resource documents
* **[/yelp_proxy](https://github.com/sean-olson-e/Rapid-Application-Development-using-Angular-CLI/tree/master/yelp_proxy)**: a simple node proxy used to communicate with the Yelp API

## Getting started

```bash
# one-time only when cloning this repo,
# if you don't already have the Angular CLI installed
npm install -g @angular/cli

# choose your paroject app
cd ./project_apps/<your-choice>

# STOP CODING AND READ THE SAMPLE'S README
# THEN YOU MAY CONTINUE

# one-time only
npm install

# every time you want to begin serving/watching
ng serve

# every time you want to build
ng build --base-href ./
```

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
