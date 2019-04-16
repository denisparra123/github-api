import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-dashboard',
  templateUrl: './github-dashboard.component.html',
  styleUrls: ['./github-dashboard.component.less']
})
export class GithubDashboardComponent implements OnInit {

    code;
    users;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(paramsReaded => {
        console.log(paramsReaded); // {order: "popular"}
          let params = new HttpParams();
          params = params.append('client_id','1a513acbc61f6d9faf37');
          params = params.append('client_secret','ae3058dd3d12e94561d290ecc2039d86f57930c1');
          params = params.append('code', paramsReaded.code);
          const body = {
            client_id: '1a513acbc61f6d9faf37',
            client_secret: 'ae3058dd3d12e94561d290ecc2039d86f57930c1',
            code: paramsReaded.code
          }
          let headers = new HttpHeaders();
              headers = headers.append("Access-Control-Allow-Origin", "*")
              headers = headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
              headers = headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
          this.http.get('http://localhost:3000/git/access-token', {params}).subscribe(res => {
              console.log(res) 
              let params = new HttpParams();
              params = params.append('access-token', res['access_token'])
              this.http.get('http://localhost:3000/git/users', {params}).subscribe(resUsrs => {
                  this.users = resUsrs;
              })
          })
      });
  }
} 