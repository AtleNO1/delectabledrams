import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Whisky } from '../models/whisky';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [DataService]
})
export class GalleryComponent implements OnInit {
  whiskies: Whisky[];

  constructor(private DataService: DataService) {}

    ngOnInit() {
      this.whiskies = this.DataService.getImages();
    }
}
