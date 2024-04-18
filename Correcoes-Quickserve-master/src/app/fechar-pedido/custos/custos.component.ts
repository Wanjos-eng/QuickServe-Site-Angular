import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custos',
  templateUrl: './custos.component.html',
  styleUrls: ['./custos.component.scss']
})
export class CustosComponent {
  @Input() delivery: number = 0;
  @Input() itemsValue: number = 0;

  total() {
    return this.delivery + this.itemsValue;
  }
}
