import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';
import { chunk } from 'lodash';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit, AfterViewInit {

  categorias = [ 
    'Ação', 
    'Anime', 
    'Asiáticos', 
    'Brasileiros', 
    'Britânicos', 
    'Ciência e natureza', 
    'Comédia', 
    'Drama', 
    'Esportes', 
    'EUA',
    'Ficção científica e fantasia',
    'Mistério',
    'Novelas', 
    'Para as crianças', 
    'Policiais', 
    'Reality e talk shows',
    'Romance', 
    'Séries documentais',
    'Teen', 
    'Terror'
  ]

  showVideo: boolean = false;
 

  @ViewChild('filmVideo') 
  filmVideo!: ElementRef;

  @ViewChild('div')
  div!: ElementRef;
  @ViewChild('tooltip') 
  tooltip!: ElementRef;

  constructor() { }

  showMe: boolean = false;

  popperBox() {
    this.showMe = !this.showMe;
  }

  ngAfterViewInit(): void {
    let video = this.filmVideo.nativeElement;
    video.src = 'assets/video/faber.mp4';
    video.load();

    video.addEventListener('loadeddata', () =>  {
      video.play();
      this.showVideo = true;
    }, false);

    const popperInstance = createPopper(this.div.nativeElement, this.tooltip.nativeElement, {
      placement: 'bottom-start',
    });
  }

  ngOnInit(): void {
    console.log(chunk(this.categorias, 7))
  }

  getGrupos() {
    return chunk(this.categorias, 7)
  }

  
}

