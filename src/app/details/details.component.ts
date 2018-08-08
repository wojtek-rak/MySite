import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  name: string;
  repo$: object;
  description$: string;
  constructor( private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.name = params.name);
  }

  ngOnInit() {
    this.data.getRepo('wojtek-rak', this.name).subscribe(
      data => this.repo$ = data
    );
    const descriptionDict = {};
    descriptionDict['ApiReader']  = 'App for reading and displaying API from Github. Enter Username and Repositoryname and click Get Data. You can refresh it in time by enter interval time ( in sec ) <br> <br> Used NuGet: <br> NUnit <br> MoQ <br> System.Reactive <br> Akka <br> Akka.TestKit <br> Akka.TestKit.NUnit <br> Newtonsoft.Json<br> ';
    descriptionDict['PaintStore_BackEnd']  = 'API for connecting with database using ASP.NET with Entiti Framework';
    descriptionDict['GithubApi']  = 'App for deployment of .NET REST on http://github-api.azurewebsites.net/api/Repository/ to use it type http://github-api.azurewebsites.net/api/Repository/ (owner username) / (repository name) <br> <br>  For example" http://github-api.azurewebsites.net/api/Repository/google/gvisor';
    descriptionDict['Pong']  = 'Simple Pong game write in JS with rxjs.';
    descriptionDict['MySite']  = 'Site about me created in angular, which you are currently watching :D';
    console.log(descriptionDict[this.name]);
    this.description$ = '<br>' + descriptionDict[this.name] + '<br><br><br><br>' ;
  }

}
