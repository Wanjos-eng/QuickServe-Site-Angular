import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { MenuItem } from '../../models/menu-item.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ServicoCarrinhoCompras } from '../../services/carrinho.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus$: Observable<MenuItem[]> = new Observable;

  constructor(private restauranteService: RestauranteService, private route: ActivatedRoute, private servicoCarrinhoCompras: ServicoCarrinhoCompras) {}
  ngOnInit() {
    this.restauranteService.currentRestauranteId.subscribe(id => {
      if (id !== null) {
        this.menus$ = this.restauranteService.menuDeRestaurante().pipe(
          map(menus => menus.filter(menu => menu.restaurantId === id))
        );
      }
    });
  }

  adicionarItem(item: any){
    this.servicoCarrinhoCompras.adicionarItem(item)
  }
}
