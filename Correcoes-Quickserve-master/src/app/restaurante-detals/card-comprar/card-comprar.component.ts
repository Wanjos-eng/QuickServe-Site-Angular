import { Component, OnInit } from '@angular/core';
import { ServicoCarrinhoCompras } from '../../services/carrinho.service';

@Component({
  selector: 'app-card-comprar',
  templateUrl: './card-comprar.component.html',
  styleUrls: ['./card-comprar.component.scss']
  })
export class CardComprarComponent implements OnInit {

rowState = 'ready'

constructor(private servicoCarrinhoCompras: ServicoCarrinhoCompras) { }

ngOnInit() {
}

itens() {
  return this.servicoCarrinhoCompras.itens$;
}

limpar(){
  this.servicoCarrinhoCompras.limpar()
}

removerItem(item: any){
  this.servicoCarrinhoCompras.removerItem(item)
}

adicionarItem(item: any){
  this.servicoCarrinhoCompras.adicionarItem(item)
}

total(): number {
  return this.servicoCarrinhoCompras.total()
}
}
