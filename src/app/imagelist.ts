import { Whisky } from './models/whisky';
import { Image } from './models/image';

export const Whiskies: Whisky[] = [
  {
    category: 'intro',
    name: 'Introductory Whiskies',
    desc: 'Try whiskies from the different regions of Scotland. We’ll select some interesting drams to give you a wide selection of styles and flavours to help you explore the depth of this wonderful drink.',
      images: [
        {url: './assets/images/gallery/intro0.jpg'},
        {url: './assets/images/gallery/intro1.jpg'},
        {url: './assets/images/gallery/intro2.jpg'}
      ]
  },
  {
    category: 'islay',
    name: 'Islay Whiskies',
    desc: 'The peaty qualities of Islay whiskies are legendary. Powerful and pungent, if they are to your taste we have a wide selection of interesting bottlings from Islay distilleries that we would love to share with you.',
      images: [
        {url: './assets/images/gallery/islay0.jpg'},
        {url: './assets/images/gallery/islay1.jpg'},
        {url: './assets/images/gallery/islay2.jpg'}
      ]
  },
  {
    category: 'sherried',
    name: 'Sherried Whiskies',
    desc: 'A good Sherry matured whisky has a wonderful rich flavour that some people adore. We have some wonderful drams for those of you that appreciate the complex flavours imparted by a good Sherry Cask.',
      images: [
        {url: './assets/images/gallery/sherried0.jpg'},
        {url: './assets/images/gallery/sherried1.jpg'},
        {url: './assets/images/gallery/sherried2.jpg'}
      ]
  },
  {
    category: 'world',
    name: 'World Whiskies',
    desc: 'There are many places other than Scotland where Whisky is made and the number of distilleries is increasing all the time. We have malt whisky from several countries including some incredible drams from Japan.',
      images: [
        {url: './assets/images/gallery/world0.jpg'},
        {url: './assets/images/gallery/world1.jpg'},
        {url: './assets/images/gallery/world2.jpg'}
      ]
  }
];