# Creating & Using Services

## Project Step #4: Create a service to manage the cuisine-type options

* From the Angular CLI generate the new service class (ng generate service cuisine-type --spec false --flat true).
* Create a services directory under the app directory and drag your newly create cuisine-type service into that directory.
* Because the same instance of the service has to be shared among two components, there has to be a common instance.
* The child components get a reference to the common component instance through dependency injection, and Angular will manage the instantiation.
* Add the service to the providers list in the app module (app.module.ts)
* Import the service into the component module
* Create a property in the component for the service type
* Add a typed augument for the service to the component module constructor and assign that parameter to the component property


### Licensing

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
