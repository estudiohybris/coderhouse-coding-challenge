import { NgModule } from '@angular/core';
import { Error404Component } from './error404/error404.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    Error404Component
  ]
})
export class ErrorsModule { }
