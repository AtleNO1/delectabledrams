import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  scroll(e) {
    let target = e.target.target;
    document.getElementById(target).scrollIntoView({behavior: "smooth"});
  }

  ngOnInit() {
  }

}
