import {Component, HostListener, OnInit, Inject} from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, ) { }

  // @HostListener('window:resize', ['$event'])
  // sizeChange(event) {
  //   console.log('size changed.', event);
  // }

  ngOnInit() {
    //this.window.log('XD');
  }

}
