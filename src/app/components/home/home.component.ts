import { element } from 'protractor';
import { Component, OnInit, AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

  showVideo: boolean = false;
 

  @ViewChild('homeVideo') 
  homeVideo!: ElementRef;
   constructor() { }

  ngAfterViewInit(): void {
    let video = this.homeVideo.nativeElement;
    video.src = 'assets/video/trailer.mp4';
    video.load();

    video.addEventListener('loadeddata', () =>  {
      video.play();
      this.showVideo = true;
    }, false);
  }

  ngOnInit(): void {
  }
}
