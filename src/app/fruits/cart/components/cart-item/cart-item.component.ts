import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  @Output() removedItemQuantity = new EventEmitter<CartItem>();
  @Output() addedItemQuantity = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveItemQuantity(item: CartItem): void {
    this.removedItemQuantity.emit(item);
  }

  onAddItemQuantity(item: CartItem): void {
    this.addedItemQuantity.emit(item);
  }
}
