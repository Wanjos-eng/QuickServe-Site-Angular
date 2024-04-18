import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custos',
  templateUrl: './custos.component.html',
  styleUrls: ['./custos.component.scss']
})
export class CustosComponent {
  @Input() entrega: number = 100;
  @Output() mudancaTotal = new EventEmitter<number>();

  private _totalCarrinho: number = 0;

  @Input()
  set totalCarrinho(valor: number) {
    this._totalCarrinho = valor;
    this.mudancaTotal.emit(this.total());
  }

  get totalCarrinho(): number {
    return this._totalCarrinho;
  }

  total() {
    return this.entrega + this.totalCarrinho;
  }
}
