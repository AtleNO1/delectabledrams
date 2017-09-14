import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Whisky } from '../models/whisky';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [DataService]
})
export class IntroComponent implements OnInit {
  constructor(private DataService: DataService) {}
  whiskies: Whisky[];

  // scroll(e) {
  //   const target = e.target.target;
  //   document.getElementById(target).scrollIntoView({behavior: 'smooth'});
  // }

  ngOnInit() {
    this.whiskies = this.DataService.getImages();
  }

}
