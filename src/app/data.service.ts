import { Injectable } from '@angular/core';
import { Whisky } from './models/whisky';
import { Image } from './models/image';
import { Whiskies } from './imagelist';

@Injectable()
export class DataService {
  getImages(): Whisky[] {
    return Whiskies;
  }
}
