import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gallery, GalleryConfig, GalleryItem, GalleryRef, ImageItem} from '@ngx-gallery/core';
import {delay} from 'q';
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

  galleryMVC: GalleryItem[];
  galleryUNITY_TESTING: GalleryItem[];
  galleryGAMETESTING: GalleryItem[];

  ngOnInit() {
    this.galleryMVC = [
      new ImageItem({src: 'assets/img/gallery/MVC/MVC_4.png', thumb: 'assets/img/gallery/MVC/MVC_4.png'}),
      new ImageItem({src: 'assets/img/gallery/MVC/MVC_1.JPG', thumb: 'assets/img/gallery/MVC/MVC_1.JPG'}),
      new ImageItem({src: 'assets/img/gallery/MVC/MVC_2.JPG', thumb: 'assets/img/gallery/MVC/MVC_2.JPG'}),
      new ImageItem({src: 'assets/img/gallery/MVC/MVC_3.JPG', thumb: 'assets/img/gallery/MVC/MVC_3.JPG'})
    ];

    this.galleryUNITY_TESTING = [
      new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_1.jpg'}),
      new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG', thumb: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_2.JPG'}),
      new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_3.jpg'}),
      new ImageItem({src: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg', thumb: 'assets/img/gallery/UNITY_TESTING/UNITY_TESTING_4.jpg'})
    ];

    this.galleryGAMETESTING = [
      new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg', thumb: 'assets/img/gallery/GAMETESTING/GAMETESTING_1.jpg'}),
      new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg', thumb: 'assets/img/gallery/GAMETESTING/GAMETESTING_2.jpg'}),
      new ImageItem({src: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg', thumb: 'assets/img/gallery/GAMETESTING/GAMETESTING_3.jpg'})
    ];

  }

  ngOnDestroy() {
    this.galleryMVC.length = 0;
    this.galleryUNITY_TESTING.length = 0;
    this.galleryGAMETESTING.length = 0;
    }


}
