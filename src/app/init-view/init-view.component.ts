import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-init-view',
  templateUrl: './init-view.component.html',
  styleUrls: ['./init-view.component.css']
})
export class InitViewComponent implements OnInit {
  doSlide: boolean;
  constructor(public router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.doSlide = !this.doSlide;
      setTimeout(() => this.router.navigate(['/about']), 500);
    }, 500);
  }

  changeRoute() {
    setTimeout(() => this.router.navigate(['/about']), 500);
  }

}
