import { MenuItem } from "./menu-item.model"

export class CardItem {
  constructor(public menuItem: MenuItem,
              public quantidade: number = 1){}

  valor(): number {
    return this.menuItem.price * this.quantidade
  }
}

