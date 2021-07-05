import { element } from 'protractor';
import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

// export class HomeComponent implements OnInit, AfterViewInit {

export class HomeComponent {

  // @ViewChild('button')
  // button!: ElementRef;
  // @ViewChild('tooltip') 
  // tooltip!: ElementRef;
  constructor() { }

  //Toogle elemento show and hide
  // showMe: boolean = false;

  // toogleTag() {
  //   this.showMe =!this.showMe;
  // }

  ngOnInit(): void {
  }


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
