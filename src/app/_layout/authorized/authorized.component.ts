import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  public showMenuFlag: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  public showMenu(show: boolean): boolean {
    this.showMenuFlag = show;
    return false;
  }

}
