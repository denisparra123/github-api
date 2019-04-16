import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubDashboardComponent } from 'src/components/github-dasahboard/github-dashboard.component';

const routes: Routes = [
  {
    path: 'git',
    component: GithubDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
