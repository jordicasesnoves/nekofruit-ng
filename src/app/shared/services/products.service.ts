import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CartItem, Product, Pageable } from '../models/backendModels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) {}

  getTopSellingProducts(): Observable<Product[]> {
    let params = new HttpParams({
      fromObject: { _sort: 'total_sales', _order: 'desc', _limit: '8' },
    });

    return this.http
      .get<Product[]>(`${this.baseUrl}/products`, { params: params })
      .pipe(
        map((products) => products),
        catchError((err) => throwError(err))
      );
  }

  getNewProducts(): Observable<Product[]> {
    let params = new HttpParams({
      fromObject: {
        new_product: 'true',
        _sort: 'name',
        _order: 'desc',
        _limit: '8',
      },
    });

    return this.http
      .get<Product[]>(`${this.baseUrl}/products`, { params: params })
      .pipe(
        map((products) => products),
        catchError((err) => throwError(err))
      );
  }

  addItemToCart(cartItem: CartItem): Observable<CartItem> {
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

  getAllProducts(): Observable<Product[]> {
    let params = new HttpParams({
      fromObject: {
        _sort: 'name',
        _order: 'desc',
      },
    });

    return this.http
      .get<Product[]>(`${this.baseUrl}/products`, {
        params: params,
      })
      .pipe(
        map((products) => products),
        catchError((err) => throwError(err))
      );
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.baseUrl}/cart`).pipe(
      map((cartItems) => cartItems),
      catchError((err) => throwError(err))
    );
  }
}
