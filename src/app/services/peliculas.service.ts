import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  constructor(private http: HttpClient) { }

  get params(){
    return{
      api_key:'fe88e5740d2c9aeb9d905af84a4b4787',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }

  getCartelera():Observable<CarteleraResponse> {
  
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
      params: this.params
    }).pipe(
      tap( () => {
        this.carteleraPage +=1;
      })
    );


  }
}
