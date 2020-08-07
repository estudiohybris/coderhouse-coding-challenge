import { NgModule } from '@angular/core';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    WebDevelopmentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    WebDevelopmentComponent
  ]
})
export class CourseModule { }
