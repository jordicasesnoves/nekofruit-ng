import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-view-summary',
  templateUrl: './cart-view-summary.component.html',
  styleUrls: ['./cart-view-summary.component.scss'],
})
export class CartViewSummaryComponent implements OnInit, OnChanges {
  @Input() cartItems: CartItem[];
  loading: boolean = true;
  total: number = 0;

  constructor() {}

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
}
