import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-upbar',
  templateUrl: './upbar.component.html',
  styleUrls: ['./upbar.component.css']
})
export class UpbarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {
  }

}
