import {Component, OnInit, ɵEMPTY_ARRAY} from '@angular/core';
import { DataService } from '../data.service';
/*import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';*/

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],

  /*animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]*/
})

export class ProjectsComponent implements OnInit {

  repos$: object[] = [];
  constructor(private  data: DataService) { }

  ngOnInit() {
    const repos = ['PaintStore_BackEnd', 'ApiReader', 'GithubApi', 'Pong', 'Site-about-me'];
    for (const repName of repos) {

      this.data.getRepo('wojtek-rak', repName).subscribe(
        data => this.repos$.push(data)
      );
    }
  }

}
