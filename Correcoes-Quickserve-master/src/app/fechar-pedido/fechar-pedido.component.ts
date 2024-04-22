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
  opcoesPagamento = ['Cartão', 'Dinheiro', 'PIX'];
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
    const btnConcluir = document.querySelector('.btn-success');
    if (this.formularioPedidoComponent && this.formularioPedidoComponent.formularioPedido.valid && this.pagamentoSelecionado) {
      this.temItensNoCarrinho$.subscribe((temItens: boolean) => {
        if (temItens) {
          if (btnConcluir) {
            btnConcluir.classList.remove('disabled');
            btnConcluir.classList.add('enabled');
          }
          setTimeout(() => {
            alert('Pedido concluído com sucesso!');
          }, 300);
        } else {
          alert('Por favor, adicione itens ao carrinho.');
        }
      });
    } else {
      if (btnConcluir) {
        btnConcluir.classList.remove('enabled');
        btnConcluir.classList.add('disabled');
      }
      alert('Por favor, preencha o formulário de endereço corretamente e escolha uma forma de pagamento.');
    }
  }  
}
