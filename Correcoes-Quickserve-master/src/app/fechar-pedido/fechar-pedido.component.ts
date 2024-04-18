import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServicoCarrinhoCompras } from '../services/carrinho.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';

@Component({
  selector: 'app-fechar-pedido',
  templateUrl: './fechar-pedido.component.html',
  styleUrls: ['./fechar-pedido.component.scss']
})
export class FecharPedidoComponent implements OnInit, AfterViewInit {
  opcoesPagamento = ['Cartão', 'Dinheiro'];
  pagamentoSelecionado = this.opcoesPagamento[0];
  temItensNoCarrinho$: Observable<boolean>;
  @ViewChild(FormularioPedidoComponent) formularioPedidoComponent: FormularioPedidoComponent | undefined;

  constructor(private servicoCarrinho: ServicoCarrinhoCompras, private construtorFormulario: FormBuilder) {
    this.temItensNoCarrinho$ = this.servicoCarrinho.itens$.pipe(
      map((itens: any[]) => itens.length > 0)
    );
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Agora você pode acessar seguro o `formularioPedidoComponent`
    console.log(this.formularioPedidoComponent);
  }

  itensCarrinho(): Observable<any[]> { // Alterando para retornar um Observable
    return this.servicoCarrinho.itens$;
  }

  limparCarrinho(){
    this.servicoCarrinho.limpar();
  }

  retirarItemCarrinho(item: any){
    if (item) {
      this.servicoCarrinho.diminuirQuantidade(item);
    }
  }
  removerItemCarrinho(item: any){
    if (item) {
      this.servicoCarrinho.removerItem(item);
    }
  }
  adicionarItemCarrinho(item: any){
    if (item && item.menuItem) {
      this.servicoCarrinho.adicionarItem(item.menuItem);
    }
  }

  totalCarrinho(): number {
    return this.servicoCarrinho.total();
  }

  finalizarPedido() {
    if (this.formularioPedidoComponent && this.formularioPedidoComponent.formularioPedido.valid) {
      this.temItensNoCarrinho$.subscribe((temItens: boolean) => {
        if (temItens) {
          alert('Pedido concluído com sucesso!');
        } else {
          alert('Por favor, adicione itens ao carrinho.');
        }
      });
    } else {
      alert('Por favor, preencha o formulário de endereço corretamente.');
    }
  }
}
