import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  selecioneMenu(m:string): void {
    console.log(m)
    this.menu = m;

  } 

}
