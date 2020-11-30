import { Component, Input, OnInit } from '@angular/core';
import { CartItem, Product } from '../../models/backendModels';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent implements OnInit {
  @Input() products: Product[];

  addedItemToCart$: Observable<CartItem>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  addCartItem(cartItem: CartItem): void {
    this.addedItemToCart$ = this.productsService.addItemToCart(cartItem);
    this.addedItemToCart$.subscribe({
      next(cartItem) {
        alert(`${cartItem.quantity} ${cartItem.product.name} added to cart!`);
      },
      error(msg) {
        console.log(msg);
      },
    });
  }
}
