# Create a Component

form the [Angular API Documentation](https://angular.io/api/core/Component)

> Components are the most basic building block of an UI in an Angular application. An Angular application is a tree of Angular components. Angular components are a subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.

> A component must belong to an NgModule in order for it to be usable by another component or application. To specify that a component is a member of an NgModule, you should list it in the declarations field of that NgModule.

> In addition to the metadata configuration specified via the Component decorator, components can control their runtime behavior by implementing various Life-Cycle hooks.

## Project Step #1: Creting your first Component

* create a component name key-manager (ng generate component key-manager --spec false)
* clean up the app component template (app.component.html) and include the tag for the key-manager (<app-key-manager></app-key-manager>)
* add the html elements to the key-manager component template (key-manager.component.html)
* create the properties and methods in the key-manager module (key-manager.component.ts)
* wire up the one-way property bindings and event handlers in the key-manager template
* include the FormModule in the application module (app.module.ts)
* refactor the methods in the key-manager component module to use two-way binding
* refactor the bindings in the key-manager component template to use two-way binding


### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
