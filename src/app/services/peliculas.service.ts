import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;
  constructor(private http: HttpClient) { }

  get params(){
    return{
      api_key:'fe88e5740d2c9aeb9d905af84a4b4787',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }

  getCartelera():Observable<Movie[]> {
      
    if (this.cargando) {
      //cargando peliculas
      return of([]);
    }

    this.cargando = true;
  
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap( () => {
        this.carteleraPage +=1;
        this.cargando = false;
      })
    );


  }
}
