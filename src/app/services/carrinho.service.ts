import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';
import { CardItem } from '../models/card-item.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoCarrinhoCompras {

  private itensSubject = new BehaviorSubject<CardItem[]>([]);
  itens$ = this.itensSubject.asObservable();

  limpar(){
    this.itensSubject.next([]);
  }

  adicionarItem(item: MenuItem){
    let itens = this.itensSubject.getValue();
    let itemEncontrado = itens.find((mItem)=> mItem.menuItem.id === item.id);
    if(itemEncontrado){
      this.aumentarQuantidade(itemEncontrado);
    }else{
      this.itensSubject.next([...itens, new CardItem(item)]);
    }
  }

  aumentarQuantidade(item: CardItem){
    item.quantidade = item.quantidade + 1;
    this.atualizarItens();
  }

  diminuirQuantidade(item: CardItem){
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0){
      this.removerItem(item);
    }else{
      this.atualizarItens();
    }
  }

  removerItem(item: CardItem){
    const itens = this.itensSubject.getValue();
    const indice = itens.indexOf(item);
    if (indice > -1) {
      this.itensSubject.next([...itens.slice(0, indice), ...itens.slice(indice + 1)]);
    }
  }

  total(): number{
    return this.itensSubject.getValue()
      .map(item => item.valor())
      .reduce((prev, valor)=> prev+valor, 0);
  }

  private atualizarItens() {
    this.itensSubject.next([...this.itensSubject.getValue()]);
  }
}
