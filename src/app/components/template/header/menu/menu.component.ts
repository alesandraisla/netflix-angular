// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit, AfterViewInit {
  menu = 'browse';

  constructor() { }
  
  ngAfterViewInit(): void {
     
  }


  ngOnInit(): void {
  }

  selecioneMenu(m:string): void {
    // console.log(m)
    this.menu = m;

  } 

}
