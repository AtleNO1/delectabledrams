import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(private DataService: DataService) {}

  // scroll(e) {
  //   const target = e.target.target;
  //   document.getElementById(target).scrollIntoView({behavior: 'smooth'});
  // }

  ngOnInit() {
  }

}
