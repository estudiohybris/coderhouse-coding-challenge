import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// authotized
import { AuthorizedComponent } from './_layout/authorized/authorized.component';
import { WebDevelopmentComponent } from './course/web-development/web-development.component';
// errors
import { ErrorComponent } from './_layout/error/error.component';
import { Error404Component } from './errors/error404/error404.component';

const routes: Routes = [
  // auth
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      {
        path: 'desarrollo-web-online',
        component: WebDevelopmentComponent
      },
      { 
        path: '',
        redirectTo: '/desarrollo-web-online',
        pathMatch: 'full'
      }
    ]
  },
  // errors
  {
    path: 'error',
    component: ErrorComponent,
    children: [
      {
        path: '404',
        component: Error404Component
      }
    ]
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
