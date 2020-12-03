import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  @Output() removedItemQuantity = new EventEmitter();
  @Output() addedItemQuantity = new EventEmitter();
  @Output() removedProduct = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemoveItemQuantity(): void {
    this.removedItemQuantity.emit();
  }

  onAddItemQuantity(): void {
    this.addedItemQuantity.emit();
  }

  onRemoveProduct(): void {
    this.removedProduct.emit();
  }
}
