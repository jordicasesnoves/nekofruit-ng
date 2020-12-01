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
  @Input() currentPage: number;
  @Input() productsPerPage: number;

  paginatedGrid: boolean;

  addedItemToCart$: Observable<CartItem>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Check if the grid is using pagination
    if (this.currentPage || this.productsPerPage) {
      this.paginatedGrid = true;
    } else {
      this.paginatedGrid = false;
    }
  }

  addCartItem(cartItem: CartItem): void {
    this.addedItemToCart$ = this.productsService.addItemToCart(cartItem);
    this.addedItemToCart$.subscribe({
      next(cartItem) {
        alert(
          `1 ${cartItem.product.name} added to cart. Total added: ${cartItem.quantity} `
        );
      },
      error(msg) {
        console.log(msg);
      },
      complete() {
        console.log('complete triggered');
      },
    });
  }
}
