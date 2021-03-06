import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/navbar/nav.component';
import { ControlComponent } from './components/control/control.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { AppRoutingModule } from './app-routing.module';
import { TrackEditComponent } from './components/track-edit/track-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { StepsComponent } from './components/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ControlComponent,
    TracksComponent,
    TrackEditComponent,
    SliderComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
