import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gallery, GalleryConfig, GalleryItem, GalleryRef, ImageItem} from '@ngx-gallery/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
//import {delay} from 'q';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  // navigationSubscription;
  // initialiseInvites() {}
  constructor(
    private gallery: Gallery
    //private router: Router
  ) {

    // Working but not necessary
    // this.navigationSubscription = this.router.events.subscribe((e: any) => {
    //   if (e instanceof NavigationEnd) {
    //     this.initialiseInvites();
    //   }
    // });
  }


  contentTag: HTMLElement = document.getElementById('content');

  //galleryUNIT_TESTING: GalleryItem[];
  //galleryMVC: GalleryItem[];
  //galleryUNITY_TESTING: GalleryItem[];
  //galleryGAMETESTING: GalleryItem[];

  galleryOptions: NgxGalleryOptions[];
  galleryUNIT_TESTING: NgxGalleryImage[];
  galleryMVC: NgxGalleryImage[];
  galleryUNITY_TESTING: NgxGalleryImage[];
  galleryGAMETESTING: NgxGalleryImage[];

  ngOnInit() {

    this.contentTag.classList.add('blackBG');

    this.galleryOptions = [
      {
        width: '600px',
        height: '500px',
        thumbnailsColumns: 3,
        imageAutoPlay: true,
        imageAutoPlayInterval: 3000
        //imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width
      {
        breakpoint: 1150,
        width: '600px',
        height: '500px',
        //imagePercent: 80,
        //thumbnailsPercent: 20,
        //thumbnailsMargin: 20,
        //thumbnailMargin: 20
      },
      {
        breakpoint: 601,
        width: '100%',
        height: '100%'
        //imagePercent: 80,
        //thumbnailsPercent: 20,
        //thumbnailsMargin: 20,
        //thumbnailMargin: 20
      },
      {
        breakpoint: 450,
        height: '100%',
        width: '100%'
      }
    ];

    this.galleryUNIT_TESTING = [
      {
        small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_1_MINI.png',
        medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png',
        big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png'
      },
      {
        small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_2_MINI.jpg',
        medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg',
        big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg'
      },
      {
        small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_3_MINI.jpg',
        medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg',
        big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg'
      },
      {
        small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_4_MINI.jpg',
        medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg',
        big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg'
      },
      {
        small: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_5_MINI.jpg',
        medium: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg',
        big: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg'
      }
    ];

    this.galleryMVC = [
      {
        small: 'assets/img/gallery/MVC/MINI/MVC_4_MINI.png',
        medium: 'assets/img/gallery/MVC/MVC_4.png',
        big: 'assets/img/gallery/MVC/MVC_4.png'
      },
      {
        small: 'assets/img/gallery/MVC/MINI/MVC_1_MINI.jpg',
        medium: 'assets/img/gallery/MVC/MVC_1.JPG',
        big: 'assets/img/gallery/MVC/MVC_1.JPG'
      },
      {
        small: 'assets/img/gallery/MVC/MINI/MVC_2_MINI.jpg',
        medium: 'assets/img/gallery/MVC/MVC_2.JPG',
        big: 'assets/img/gallery/MVC/MVC_2.JPG'
      },
      {
        small: 'assets/img/gallery/MVC/MINI/MVC_3_MINI.jpg',
        medium: 'assets/img/gallery/MVC/MVC_3.JPG',
        big: 'assets/img/gallery/MVC/MVC_3.JPG'
      }
    ];

    this.galleryUNITY_TESTING = [
      {
        small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_1_MINI.jpg',
        medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg',
        big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg'
      },
      {
        small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_2_MINI.jpg',
        medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG',
        big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG'
      },
      {
        small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_3_MINI.jpg',
        medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg',
        big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg'
      },
      {
        small: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_4_MINI.jpg',
        medium: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg',
        big: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg'
      }
    ];

    this.galleryGAMETESTING = [
      {
        small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_1_MINI.jpg',
        medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg',
        big: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg'
      },
      {
        small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_2_MINI.jpg',
        medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg',
        big: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg'
      },
      {
        small: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_3_MINI.jpg',
        medium: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg',
        big: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg'
      }
    ];



    // this.galleryUNIT_TESTING = [
    //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_1.png', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_1_MINI.png'}),
    //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_2.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_2_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_3.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_3_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_4.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_4_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNIT_TESTING/UNIT_TESTING_5.jpg', thumb: 'assets/img/gallery/UNIT_TESTING/MINI/UNIT_TESTING_5_MINI.jpg'})
    // ];

    // this.galleryMVC = [
    //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_4.png', thumb: 'assets/img/gallery/MVC/MINI/MVC_4_MINI.png'}),
    //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_1.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_1_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_2.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_2_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/MVC/MVC_3.JPG', thumb: 'assets/img/gallery/MVC/MINI/MVC_3_MINI.jpg'})
    // ];

    // this.galleryUNITY_TESTING = [
    //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_1_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_2_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_3_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/MINI/UNITY_TESTING_4_MINI.jpg'})
    // ];

    // this.galleryGAMETESTING = [
    //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_1_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_2_MINI.jpg'}),
    //   new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg', thumb: 'assets/img/gallery/GAMETESTING/MINI/GAMETESTING_3_MINI.jpg'})
    // ];
  }

  ngOnDestroy() {
    this.galleryUNIT_TESTING.length = 0;
    this.galleryMVC.length = 0;
    this.galleryUNITY_TESTING.length = 0;
    this.galleryGAMETESTING.length = 0;

    this.contentTag.classList.remove('blackBG');
  }


}
