import { Component, OnInit } from '@angular/core';
import { RestauranteService } from './../services/restaurante.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Restaurante } from '../models/restaurante.model'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss']
})
export class RestaurantesComponent implements OnInit {
  restaurantes$: Observable<Restaurante[]> = of([]); // Valor padrão adicionado

  constructor(private restauranteService: RestauranteService, private router: Router) {}

  ngOnInit() {
    this.restaurantes$ = this.restauranteService.obterRestaurantes();
  }

  restauranteId(id: string) {
    this.restauranteService.obterRestaurantePorId(id).subscribe(
      restaurante => {
        this.restauranteService.selecionarRestaurante(restaurante);
        this.router.navigate(['/restaurantes', id]);
      }
    );
  }
}
