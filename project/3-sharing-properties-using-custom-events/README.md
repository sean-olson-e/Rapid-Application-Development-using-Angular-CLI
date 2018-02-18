# Sharing Component Properties and Creating Custom Events
In this section we'll be digging a little deeper in Decorators and Event Emitters used to raise events to subscribing components.  For more on these topis, check out these resources:

* [@Input() decerator](https://angular.io/api/core/Input), used to share properties with child components
* [@Output() decerator](https://angular.io/api/core/Output), used to create custom events
* [Event Emitter](https://angular.io/api/core/EventEmitter), used to raise custom events

### Model the proerty sharing / event model between the dashboard and the key-manager
* revert from two way binding to one-way binding on key-manager template to allow for property passing from dashboard component

### Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
