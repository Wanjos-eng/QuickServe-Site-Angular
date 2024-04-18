import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante } from '../models/restaurante.model';
import { MenuItem } from '../models/menu-item.model';
import { 	Observable 	} 	from 	'rxjs';

import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URLS = {
  RESTAURANTES: '/restaurantes',
  REVIEWS: '/reviews',
  MENU: '/menu'
};

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private url = environment.api;
  private restauranteSelecionadoSubject = new BehaviorSubject<Restaurante | null>(null);
  restauranteSelecionado$ = this.restauranteSelecionadoSubject.asObservable();

  private restauranteIdSource = new BehaviorSubject<string | null>(null);
  currentRestauranteId = this.restauranteIdSource.asObservable();

  constructor(private httpclient:HttpClient) {}

  obterRestaurantes(): Observable<Restaurante[]> {
    return this.httpclient.get<Restaurante[]>(this.url + API_URLS.RESTAURANTES)
      .pipe(catchError(this.handleError));
  }

  obterRestaurantePorId(id: string): Observable<Restaurante> {
    return this.httpclient.get<Restaurante>(`${this.url}${API_URLS.RESTAURANTES}/${id}`)
      .pipe(catchError(this.handleError));
  }

  selecionarRestaurante(restaurante: Restaurante): void {
    this.restauranteSelecionadoSubject.next(restaurante);
    this.restauranteIdSource.next(restaurante.id);
  }

  reviewsDeRestaurante(): Observable<any[]> {
    return this.httpclient.get<any[]>(`${this.url}${API_URLS.REVIEWS}`)
      .pipe(catchError(this.handleError));
  }

  menuDeRestaurante(): Observable<MenuItem[]> {
    return this.httpclient.get<MenuItem[]>(`${this.url}${API_URLS.MENU}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('Erro na requisição HTTP', error);
    return throwError(error);
  }
}
