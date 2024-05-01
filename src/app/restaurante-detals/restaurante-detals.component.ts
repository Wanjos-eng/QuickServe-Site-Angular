import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../services/restaurante.service';
import { Restaurante } from '../models/restaurante.model';
import { Observable, EMPTY, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-restaurante-detals',
  templateUrl: './restaurante-detals.component.html',
  styleUrls: ['./restaurante-detals.component.scss']
})
export class RestauranteDetalsComponent implements OnInit {

  restaurante$: Observable<Restaurante | null> = EMPTY;

  constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) {}

  ngOnInit(){
this.restaurante$ = this.route.paramMap.pipe(
  switchMap(params => {
    const id = params.get('id');
    if (id !== null) {
      return this.restauranteService.obterRestaurantePorId(id);
    } else {
      return of(null);
    }
  }),
  tap(restaurante => {
    if (restaurante !== null) {
      this.restauranteService.selecionarRestaurante(restaurante);
    }
  })
);

  }
}
