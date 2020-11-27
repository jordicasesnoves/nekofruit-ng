import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product, FilterProduct } from '../../../shared/models/backendModels';
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
      .get<Product[]>(`${this.baseUrl}` + `/products`, { params: params })
      .pipe(
        map((products) => products),
        catchError((err) => throwError(err))
      );
  }
}
