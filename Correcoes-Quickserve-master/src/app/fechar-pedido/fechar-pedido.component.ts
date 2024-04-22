import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ServicoCarrinhoCompras } from '../services/carrinho.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fechar-pedido',
  templateUrl: './fechar-pedido.component.html',
  styleUrls: ['./fechar-pedido.component.scss']
})
export class FecharPedidoComponent implements OnInit, AfterViewInit {
  opcoesPagamento = ['Cartão', 'Dinheiro', 'PIX'];
  pagamentoSelecionado = 'Dinheiro';
  temItensNoCarrinho$: Observable<boolean>;
  @ViewChild(FormularioPedidoComponent) formularioPedidoComponent: FormularioPedidoComponent | undefined;

  constructor(private servicoCarrinho: ServicoCarrinhoCompras, private construtorFormulario: FormBuilder, private router: Router) {
    this.temItensNoCarrinho$ = this.servicoCarrinho.itens$.pipe(
      map((itens: any[]) => itens.length > 0)
    );
  }

  ngOnInit() {
    this.formularioPedidoComponent?.formularioPedido?.get('pagamentoSelecionado')?.setValue(this.pagamentoSelecionado);
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
    this.temItensNoCarrinho$.pipe(
      take(1) // Isso garante que a subscrição será descartada após o primeiro valor emitido
    ).subscribe((temItens: boolean) => {
      if (this.formularioPedidoComponent && this.formularioPedidoComponent.formularioPedido.valid && this.pagamentoSelecionado && temItens) {
        // Processar o pedido
        this.limparCarrinho();
        // Redirecionar para "/pedido-concluido"
        this.router.navigate(['/pedido-concluido']);
        alert('Pedido concluído com sucesso!');
        // Aqui você pode adicionar a lógica para processar o pedido
        this.limparCarrinho(); // Limpa o carrinho após a conclusão do pedido
      } else {
        if (!temItens) {
          alert('Por favor, adicione itens ao carrinho.');
        } else {
          alert('Por favor, preencha o formulário de endereço corretamente e escolha uma forma de pagamento.');
        }
      }
    });
  }
}
