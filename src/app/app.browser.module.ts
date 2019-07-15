import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GalleryModule } from  '@ngx-gallery/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpbarComponent } from './upbar/upbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InitViewComponent } from './init-view/init-view.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    GalleryModule.withConfig({ loadingMode: 'indeterminate'}),
    NgxGalleryModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
