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
      apiKey: 'AIzaSyAoqtB-f0GuSFXGcM7qK3DWhwp-6Jw_JWs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
