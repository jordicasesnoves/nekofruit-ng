import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartItem, Product } from '../../models/backendModels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss'],
})
export class ProductItemCardComponent implements OnInit {
  @Input() product: Product;
  @Output() newCartItem = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {}

  onAddCartItem(product: Product): void {
    let cartItem = new CartItem();
    cartItem.product = product;
    cartItem.quantity = 1;

    this.newCartItem.emit(cartItem);

    //this.addedItemToCart$ = this.productsService.addItemToCart(cartItem);
  }
}
