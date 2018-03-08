import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KeyManagerComponent } from './key-manager/key-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    KeyManagerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
