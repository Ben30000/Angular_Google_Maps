import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AgmCoreModule} from '@agm/core';
import { AgmCompComponent } from './agm-comp/agm-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmCompComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'Enter API Key Here!'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
