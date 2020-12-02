import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CartItem } from 'src/app/shared/models/backendModels';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-view-summary',
  templateUrl: './cart-view-summary.component.html',
  styleUrls: ['./cart-view-summary.component.scss'],
})
export class CartViewSummaryComponent implements OnInit, OnChanges {
  @Input() cartItems: CartItem[];
  loading: boolean = true;
  total: number = 0;

  // Outputs from cart-item component
  addedItemQuantity$: Observable<CartItem>;
  removedItemQuantity$: Observable<CartItem>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cartItems.currentValue && this.loading) {
      this.calculateTotal();
      this.loading = false;
    }
  }

  calculateTotal(): void {
    this.cartItems.forEach((item) => {
      this.total = this.total + item.product.price_EUR * item.quantity;
    });
    this.total = Math.round(this.total * 100) / 100;
  }

  addItemQuantity(cartItem: CartItem): void {
    let that = this;
    this.addedItemQuantity$ = this.cartService.addItemToCart(cartItem);
    this.addedItemQuantity$.subscribe({
      next(cartItem) {
        // Refresh data
        let index = that.cartItems.map((item) => item.id).indexOf(cartItem.id);
        that.cartItems[index].quantity = cartItem.quantity;
        that.total = that.total + that.cartItems[index].product.price_EUR;
      },
      error(msg) {
        console.log(msg);
      },
      complete() {},
    });
  }
  removeItemQuantity(cartItem: CartItem): void {}
}
