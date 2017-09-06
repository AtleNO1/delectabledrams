import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }
  islayImages = [
    {name: 'Islay', url: './assets/images/gallery/islay0.jpg'},
    {name: 'Islay', url: './assets/images/gallery/islay1.jpg'},
    {name: 'Islay', url: './assets/images/gallery/islay2.jpg'},
  ];

  sherriedImages = [
    {name: 'Sherried Whisky', url: './assets/images/gallery/sherried0.jpg'},
    {name: 'Islay Whisky', url: './assets/images/gallery/sherried1.jpg'},
    {name: 'Islay Whisky', url: './assets/images/gallery/sherried2.jpg'},
  ];

  worldImages = [
    {name: 'World Whisky', url: './assets/images/gallery/world0.jpg'},
    {name: 'World Whisky', url: './assets/images/gallery/world1.jpg'},
    {name: 'World Whisky', url: './assets/images/gallery/world2.jpg'},
  ];

}

// {
//   "records":[
//      {
//         "TrackID":"4",
//         "ownerID":"14",
//         "name":"Test1",
//         "minTime":"2015-04-08T16:50:51Z",
//         "maxTime":"2015-04-08T17:26:39Z",
//         "tracks":[
//            {
//               "lat":"53.3996905",
//               "long":"-2.92532816666667",
//               "time":"2015-04-20T06:34:46Z",
//               "hour":6
//            },
//            {
//               "lat":"53.3997495",
//               "long":"-2.92545483333333",
//               "time":"2015-04-20T06:35:01Z",
//               "hour":6
//            },
//            {
//               "lat":"53.4008018333333",
//               "long":"-2.9253085",
//               "time":"2015-04-20T06:35:13Z",
//               "hour":6
//            }
//         ]
//      }
//   ]
// }
