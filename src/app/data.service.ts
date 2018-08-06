import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get('https://api.github.com/users/wojtek-rak/repos');
  }
  getRepo( userName, repostioryName) {
    return this.http.get('https://api.github.com/repos/' + userName + '/' + repostioryName);
  }
}
