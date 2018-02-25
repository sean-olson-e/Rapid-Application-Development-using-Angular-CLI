import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CuisineTypeService } from './services/cuisine-type.service';
import { YelpService } from './services/yelp.service';

import { AppComponent } from './app.component';
import { KeyManagerComponent } from './key-manager/key-manager.component';
import { HeaderComponent } from './header/header.component';
import { CuisineTypeListComponent } from './cuisine-type-list/cuisine-type-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsoleComponent } from './console/console.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { MapPanelComponent } from './map-panel/map-panel.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes = [
  { path: 'restaurants', component: DashboardComponent },
  { path: 'foods', component: CuisineTypeListComponent },
  { path: '**', redirectTo: '/restaurants' }
];

@NgModule({
  declarations: [
    AppComponent,
    KeyManagerComponent,
    HeaderComponent,
    CuisineTypeListComponent,
    DashboardComponent,
    ConsoleComponent,
    SearchPanelComponent,
    MapPanelComponent,
    SearchControlComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    CuisineTypeService,
    YelpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
