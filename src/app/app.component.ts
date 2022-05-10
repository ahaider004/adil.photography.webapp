import { Component } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adil.photography.webapp';
  data: Item[] = [
    {
      imageSrc: './assets/images/work20.jpg',
      imageAlt: '14'
    },
    {
      imageSrc: './assets/images/work1.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: './assets/images/work2.jpg',
      imageAlt: '2'
    },
    {
      imageSrc: './assets/images/work3.jpg',
      imageAlt: '3'
    },
    {
      imageSrc: './assets/images/work4.jpg',
      imageAlt: '4'
    },
    {
      imageSrc: './assets/images/work6.jpg',
      imageAlt: '5'
    },
    {
      imageSrc: './assets/images/work7.jpg',
      imageAlt: '6'
    },
    {
      imageSrc: './assets/images/work8.jpg',
      imageAlt: '7'
    },
    {
      imageSrc: './assets/images/work10.jpg',
      imageAlt: '8'
    },
    {
      imageSrc: './assets/images/work12.jpg',
      imageAlt: '9'
    },
    {
      imageSrc: './assets/images/work13.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: './assets/images/work14.jpg',
      imageAlt: '11'
    },
    {
      imageSrc: './assets/images/work15.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: './assets/images/work17.jpg',
      imageAlt: '13'
    }
  ]
}
