import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Whisky } from '../models/whisky';
import { Image } from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [DataService]
})
export class GalleryComponent implements OnInit {
  images: Whisky[];

  constructor(private DataService: DataService) {}

    ngOnInit() {
      this.images = this.DataService.getImages();
    }
}
