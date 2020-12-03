import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  loading: boolean = true;
  error: boolean = false;
  empty: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void {
    this.cartService.getCartItems().subscribe(
      (res) => {
        this.cartItems = res;

        if (res.length === 0) {
          this.empty = true;
        }
        this.calculateTotal();

        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.error = true;

        this.loading = false;
      }
    );
  }

  calculateTotal(): void {
    this.total = 0;
    this.cartItems.forEach(
      (item) =>
        (this.total = this.total + item.product.price_EUR * item.quantity)
    );
  }

  addedItemQuantity(item: CartItem): void {
    this.cartService.addItemToCart(item).subscribe(
      () => this.getCartData(),
      (err) => console.log(err)
    );
  }

  removedItemQuantity(item: CartItem): void {
    this.cartService.removeItemFromCart(item).subscribe(
      () => this.getCartData(),
      (err) => console.log(err)
    );
  }

  removedProduct(item: CartItem): void {
    this.cartService.removeProductFromCart(item).subscribe(
      () => this.getCartData(),
      (err) => console.log(err)
    );
  }
}
