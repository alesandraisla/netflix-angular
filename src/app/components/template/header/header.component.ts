// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
// import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
// export class HeaderComponent implements OnInit, AfterViewInit {
  export class HeaderComponent {
  // menu = 'home';

  constructor() { }


  ngOnInit(): void {
  }

  // selecioneMenu(m:string): void {
  //   console.log(m)
  //   this.menu = m;

  // } 

  


  // @ViewChild('button')
  // button!: ElementRef;
  // @ViewChild('tooltip') 
  // tooltip!: ElementRef;



  // //Toogle elemento show and hide
  // showMe: boolean = false;

  // toogleTag() {
  //   this.showMe =!this.showMe;
  // }

  // ngAfterViewInit(): void {
  //   const popperInstance = createPopper(this.button.nativeElement, this.tooltip.nativeElement, {
  //     modifiers: [
  //       {
  //         name: 'offset',
  //         options: {
  //           offset: [0, 8],
  //         },
  //       },
  //     ],
  //   });
  // }

}
