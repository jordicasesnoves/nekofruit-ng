import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  @Input() cartItems: CartItem[];

  @Output() addedItemQuantity = new EventEmitter<CartItem>();
  @Output() removedItemQuantity = new EventEmitter<CartItem>();
  @Output() removedProduct = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {}

  // Output emitters
  addItemQuantity(item: CartItem): void {
    this.addedItemQuantity.emit(item);
  }
  removeItemQuantity(item: CartItem): void {
    this.removedItemQuantity.emit(item);
  }
  removeProductFromCart(item: CartItem): void {
    this.removedProduct.emit(item);
  }
}
