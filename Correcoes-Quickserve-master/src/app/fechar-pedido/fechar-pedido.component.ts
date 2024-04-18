import { Component, OnInit } from '@angular/core';
import { ServicoCarrinhoCompras } from '../services/carrinho.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fechar-pedido',
  templateUrl: './fechar-pedido.component.html',
  styleUrls: ['./fechar-pedido.component.scss']
})
export class FecharPedidoComponent implements OnInit {
  opcoesPagamento = ['Cartão', 'Dinheiro'];
  pagamentoSelecionado = this.opcoesPagamento[0];
  formularioPedido: FormGroup;
  temItensNoCarrinho$;

  constructor(private servicoCarrinho: ServicoCarrinhoCompras, private construtorFormulario: FormBuilder) {
    this.formularioPedido = this.construtorFormulario.group({
      pagamentoSelecionado: ['']
    });
    this.temItensNoCarrinho$ = this.servicoCarrinho.itens$.pipe(
      map(itens => itens.length > 0)
    );
  }

  ngOnInit() {
  }

  itensCarrinho() {
    return this.servicoCarrinho.itens$;
  }

  limparCarrinho(){
    this.servicoCarrinho.limpar();
  }

  removerItemCarrinho(item: any){
    if (item && item.menuItem) {
      this.servicoCarrinho.removerItem(item.menuItem);
    }
  }

  adicionarItemCarrinho(item: any){
    if (item && item.menuItem) {
      this.servicoCarrinho.adicionarItem(item.menuItem);
    }
  }

  totalCarrinho(): number {
    return this.servicoCarrinho.total()
  }

  finalizarPedido() {
    this.temItensNoCarrinho$.subscribe(temItens => {
      if (temItens && this.formularioPedido.valid) {
        alert('Pedido concluído com sucesso!');
      } else {
        alert('Por favor, adicione itens ao carrinho e preencha o endereço de entrega.');
      }
    });
  }
}