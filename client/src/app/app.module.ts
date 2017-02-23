import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ConsentModule} from "./consent/consent.module";
import {LayoutModule} from "./layout/layout.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    LayoutModule,
    ConsentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
