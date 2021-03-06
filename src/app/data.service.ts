import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  repositories$: object[] = [];
  repositoriesReadme$: object[] = [];
  constructor(private http: HttpClient) {
    const repos = ['PaintStore', 'ApiReader', 'MySite'];
    for (const repName of repos) {
      this.getRepo('wojtek-rak', repName).subscribe(
        data => this.repositories$.push(data)
      );
    }
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/wojtek-rak/repos');
  }
  getRepo( userName, repostioryName) {
    return this.http.get('https://api.github.com/repos/' + userName + '/' + repostioryName);
  }
  getReadme( userName, repostioryName) {
    return this.http.get('https://api.github.com/repos/' + userName + '/' + repostioryName + '/readme');
  }
}
