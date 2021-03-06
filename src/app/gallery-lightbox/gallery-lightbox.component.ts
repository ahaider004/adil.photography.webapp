import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { HostListener } from "@angular/core";

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations:[
    trigger('animation',[
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ])
    ]),
    trigger('animations2', [
      transition(':leave',[
        style({opacity: 1}),
        animate('50ms',style({opacity: 0.8}))
      ])

    ])

  ]
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  currentLightBoxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  isMobile = false;
  screenHeight: number | undefined;
  screenWidth!: number;

  
  constructor() { 
    this.getScreenSize();

  }

  ngOnInit(): void {}

  onPreviewImage(index: number):void{
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightBoxImage = this.galleryData[index];
    if(this.screenWidth < 790){
      this.previewImage = false;
      this.showMask = false;
    }
  }

  onAnimationEnd(event: AnimationEvent){
    if(event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview(){
    this.previewImage = false;
  }

  next(): void {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex>this.galleryData.length -1){
      this.currentIndex = 0;
    }
    this.currentLightBoxImage = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightBoxImage = this.galleryData[this.currentIndex];   
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
  }
}
