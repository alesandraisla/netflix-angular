import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {

  fundoFixo: boolean = false;
  
  constructor() { }

  ngAfterViewInit(): void {

    window.addEventListener('scroll', () => {
      console.log(window.scrollY > 0)
      this.fundoFixo = window.scrollY > 0
    });
  }
}
