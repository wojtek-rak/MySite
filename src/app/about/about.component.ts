import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  // @HostListener('window:resize', ['$event'])
  // sizeChange(event) {
  //   console.log('size changed.', event);
  // }

  ngOnInit() {
    //window.dispatchEvent(new Event('resize'));
    console.log('XD');
  }

}
