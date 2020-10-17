import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  constructor() { }
  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    })
  }

  ngOnInit(): void {

    console.log(this.movies);
    
  }

}
