import {Component, OnDestroy, OnInit} from '@angular/core';
import {Gallery, GalleryItem, GalleryRef, ImageItem} from '@ngx-gallery/core';
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

  images: GalleryItem[];
  galleryId = 'mixedExample';

  ngOnInit() {
    console.log('XD');
    //await delay(300);
    console.log('delay');
    this.images = [];
    this.images = [
      new ImageItem({src: 'assets/img/img.jpg', thumb: 'assets/img/img.jpg'}),
      new ImageItem({src: 'assets/img/img.jpg', thumb: 'assets/img/img.jpg'}) // thumb: 'IMAGE_THUMBNAIL_URL'
      // ... more items
    ];
    console.log(this.images.length);
    console.log(this.images.values());

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: 'assets/img/img.jpg',
      title: 'Some title'
    });
    galleryRef.load([new ImageItem({
      src: 'assets/img/img.jpg',
      title: 'Some title'
    }),
      new ImageItem({
        src: 'assets/img/img.jpg',
        title: 'Some title'
      })]);


  }

  ngOnDestroy() {
    this.images.length = 0;
    }


}
