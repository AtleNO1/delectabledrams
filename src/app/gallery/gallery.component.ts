import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(private imageService: ImageService) {}
  
    islayImgs: any = '';
    sherriedImgs: any = '';
    worldImgs: any = '';
    ngOnInit() {
      this.islayImgs = this.imageService.islayImages;
      this.sherriedImgs = this.imageService.sherriedImages;
      this.worldImgs = this.imageService.worldImages;
    }
}
