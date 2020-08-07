import { NgModule } from '@angular/core';
import { AuthorizedComponent } from './authorized/authorized.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AuthorizedComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AuthorizedComponent,
    ErrorComponent
  ]
})
export class LayoutModule { }
