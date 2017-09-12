import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Image } from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [DataService]
})
export class GalleryComponent implements OnInit {
  images: Image[];

  constructor(private DataService: DataService) {}

    // islayImgs: any = '';
    // sherriedImgs: any = '';
    // worldImgs: any = '';
    // whiskyType: any = '';
    ngOnInit() {
      this.images = this.DataService.getImages();
      console.log(this.images);
      // this.islayImgs = this.DataService.whiskyType[0].islay;
      // this.sherriedImgs = this.DataService.whiskyType[0].sherried;
      // this.worldImgs = this.DataService.whiskyType[0].world;
      // this.whiskyType = this.DataService.whiskyType;
    }
}
