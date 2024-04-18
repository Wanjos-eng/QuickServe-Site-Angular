import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews$: Observable<any> = new Observable;

  constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.restauranteService.currentRestauranteId.subscribe(id => {
      if (id !== null) {
        this.reviews$ = this.restauranteService.reviewsDeRestaurante().pipe(
          map(reviews => reviews.filter(review => review.restaurantId === id))
        );
      }
    });
  }
}
