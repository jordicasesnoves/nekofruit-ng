import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CartItem } from '../models/backendModels';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) {}

  // Get all cart items
  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.baseUrl}/cart`).pipe(
      map((cartItems) => cartItems),
      catchError((err) => throwError(err))
    );
  }

  // Add a product to cart, either has already been added to cart or not
  addProductToCart(cartItem: CartItem): Observable<CartItem> {
    // Check if the product is already added to the cart

    return new Observable((obs) => {
      let alreadyAdded: boolean;
      let params = new HttpParams({
        fromObject: {
          'product.id': cartItem.product.id.toString(),
        },
      });

      let obs1 = this.http.get<CartItem[]>(`${this.baseUrl}/cart`, {
        params: params,
      });

      obs1.subscribe((products) => {
        products.length > 0 ? (alreadyAdded = true) : (alreadyAdded = false);

        if (alreadyAdded) {
          // product is already added, just modify the quantity property
          let updatedCartItem: CartItem = {
            ...cartItem,
            quantity: products[0].quantity + 1,
          };

          this.http
            .put<CartItem>(
              `${this.baseUrl}/cart/${products[0].id}`,
              updatedCartItem
            )
            .subscribe((cartItem) => {
              obs.next(cartItem);
              obs.complete();
            });
        } else {
          // product is not added, make a HTTP post request adding the product
          this.http
            .post<CartItem>(`${this.baseUrl}/cart`, cartItem)
            .subscribe((cartItem) => {
              obs.next(cartItem);
              obs.complete();
            });
        }
      });
    });
  }

  // Remove a product that is in the cart
  removeProductFromCart(cartItem: CartItem): Observable<CartItem> {
    return this.http
      .delete<CartItem>(`${this.baseUrl}/cart/${cartItem.id}`)
      .pipe(
        map((cartItem) => cartItem),
        catchError((err) => throwError(err))
      );
  }

  // Add cart's product quantity
  addItemToCart(cartItem: CartItem): Observable<CartItem> {
    let updatedCartItem: CartItem = {
      ...cartItem,
      quantity: cartItem.quantity + 1,
    };

    return this.http
      .put<CartItem>(`${this.baseUrl}/cart/${cartItem.id}`, updatedCartItem)
      .pipe(
        map((cartItem) => cartItem),
        catchError((err) => throwError(err))
      );
  }

  // Remove cart's product quantity
  removeItemFromCart(cartItem: CartItem): Observable<CartItem> {
    let updatedCartItem: CartItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    };

    return this.http
      .put<CartItem>(`${this.baseUrl}/cart/${cartItem.id}`, updatedCartItem)
      .pipe(
        map((cartItem) => cartItem),
        catchError((err) => throwError(err))
      );
  }
}
