import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
