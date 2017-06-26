import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() data: Product;

  @Output() notificarClickParaDetalle = new EventEmitter<Product>();

  clickEnDetalle(dato: Product): void {
    this.notificarClickParaDetalle.emit(dato);
  }

}
