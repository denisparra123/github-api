import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'github-api';

  constructor(private http: HttpClient) {}
  
  signInGithub() {
    let params = new HttpParams();
    params = params.append('scope','user:email')
    params = params.append('client_id', '1a513acbc61f6d9faf37')
    params = params.append('redirect_uri', 'http://localhost:4200/git')
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=1a513acbc61f6d9faf37'
  }
}
