import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';  

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';

import { ImageService } from './image.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IntroComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
