import { element } from 'protractor';
import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-menu-action',
  templateUrl: './menu-action.component.html',
  styleUrls: ['./menu-action.component.scss']
})

export class MenuActionComponent implements OnInit, AfterViewInit {

  @ViewChild('button')
  button!: ElementRef;
  @ViewChild('tooltip') 
  tooltip!: ElementRef;

  users = [
    {
      img: 'assets/img/tigre.png',
      name: 'Lara Croft'
    },
    {
      img: 'assets/img/boneco.png',
      name: 'Ichigo Kurosaki'
    },
    {
      img: 'assets/img/boneca.png',
      name: 'Alesandra & Zoe'
    },
    {
      img: 'assets/img/smile.png',
      name: 'Naruto Uzumaki'
    },
  ]

  



  constructor() { }



  //Toogle elemento show and hide
  showMe: boolean = false;

  toogleTag() {
    this.showMe =!this.showMe;
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    const popperInstance = createPopper(this.button.nativeElement, this.tooltip.nativeElement, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }
}
