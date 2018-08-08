import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {DetailsComponent} from './details/details.component';
import {InitViewComponent} from './init-view/init-view.component';

const routes: Routes = [
  {
    path: '',
    component: InitViewComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { depth: 1},
},
  {
    path: 'about',
    component: AboutComponent,
    data: { depth: 2},
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { depth: 3},
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { depth: 4},
  },
  {
    path: 'projects/:name',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
