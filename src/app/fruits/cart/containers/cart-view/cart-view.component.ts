import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/shared/models/backendModels';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  total: number = 0;

  loading: boolean = true;
  error: boolean = false;
  empty: boolean = false;

  private subscriptions = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
    let finalTotal = 0;
    this.cartItems.forEach(
      (item) =>
        (finalTotal = finalTotal + item.product.price_EUR * item.quantity)
    );
    this.total = finalTotal;
  }

  addedItemQuantity(item: CartItem): void {
    this.subscriptions.add(
      this.cartService.addItemToCart(item).subscribe(
        () => this.getCartData(),
        (err) => console.log(err)
      )
    );
  }

  removedItemQuantity(item: CartItem): void {
    this.subscriptions.add(
      this.cartService.removeItemFromCart(item).subscribe(
        () => this.getCartData(),
        (err) => console.log(err)
      )
    );
  }

  removedProduct(item: CartItem): void {
    this.subscriptions.add(
      this.cartService.removeProductFromCart(item).subscribe(
        () => this.getCartData(),
        (err) => console.log(err)
      )
    );
  }
}
