# Importing Styles and Using Angular Built-In Directives
There are many built-in directives in Angular, designed to assist with common tasks.  You can browse the. in (The Angular API)[https://angular.io/api]

## Commonly Used Diretives
* [ngIf](https://angular.io/api/common/NgIf) -- Conditionally includes a template based on the value of an expression.
* [ngFor / NgForOf](https://angular.io/api/common/NgForOf) -- The NgForOf directive instantiates a template once per item from an iterable. The context for each instantiated template inherits from the outer context with the given loop variable set to the current item from the iterable.
* [ngStyle](https://angular.io/api/common/NgStyle) --The styles are updated according to the value of the expression evaluation.
* [ngClass](https://angular.io/api/common/NgClass) -- The CSS classes are updated as follows, depending on the type of the expression evaluation.

## Project Step #2: Import Style Files and Creating more Components

### a: Import Bootstrap and Font Awesome Styles
* use npm to install Bootstrap: npm install bootstrap --save 
* use npm to install Font Awesome: npm install font-awesome --save
* import the Bootstrap and Font Awesome css files through the styles property in the .angular-cli.json file


      "styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "../node_modules/font-awesome/css/font-awesome.min.css"
      ],

### b: Restyle the key-manager component template
* copy and paste key-manager.components.txt snippets file into component template

### c: Create a header component
* from the console create a header component (ng generate component header --spec false)
* add a property name "title" to the the header component module (header.component.ts)
* add an h1 tag to the header component template (header.component.html) and bind the title property inside the tag using double braces (string interpolation)
* add the header tag to the top of the app component template (app.component.html)


### d: Create a cuisine type list component
* from the console create a cuisine-type-list component (ng generate component cuisine-type-list --spec false)
* see code snippet files for direction

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
