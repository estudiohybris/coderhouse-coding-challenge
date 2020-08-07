import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})

export class WebDevelopmentComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}