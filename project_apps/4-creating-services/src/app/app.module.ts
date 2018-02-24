import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KeyManagerComponent } from './key-manager/key-manager.component';
import { HeaderComponent } from './header/header.component';
import { CuisineTypeListComponent } from './cuisine-type-list/cuisine-type-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyManagerComponent,
    HeaderComponent,
    CuisineTypeListComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
