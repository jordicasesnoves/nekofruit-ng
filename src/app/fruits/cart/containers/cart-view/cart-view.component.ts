import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/shared/models/backendModels';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getCartData();
  }

  getCartData(): void {
    this.cartItems$ = this.productsService.getCartItems();
  }
}
