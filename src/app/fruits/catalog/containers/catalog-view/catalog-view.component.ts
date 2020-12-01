import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/backendModels';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { on } from 'process';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.scss'],
})
export class CatalogViewComponent implements OnInit, OnDestroy {
  // Database data
  catalogProducts$: Observable<Product[]>;

  // Pagination data
  totalProducts: number;
  totalPages: number;
  productsPerPage: number = 8;
  productsOnCurrentPage: number = this.productsPerPage;
  lastRangeIndex: number;
  currentPage: number;
  prevPage: number;
  nextPage: number;

  loading: boolean = true;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription2 = this.route.queryParams.subscribe((params) => {
      this.prevPage = undefined;
      this.nextPage = undefined;
      this.currentPage = parseInt(params['page']);

      // Prevent calculating pagination when data is not ready yet
      if (!this.loading) {
        this.calculatePagination();
      }
    });

    this.getCatalogProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

  getCatalogProducts(): void {
    let that = this;
    this.subscription = this.productsService.getAllProducts().subscribe({
      next(data) {
        that.totalProducts = data.length;
        that.totalPages = Math.ceil(data.length / that.productsPerPage);
        that.calculatePagination();
      },
      error(err) {
        console.log(err);
      },
      complete() {
        that.loading = false;
      },
    });

    this.catalogProducts$ = this.productsService.getAllProducts();
  }

  calculatePagination(): void {
    let onFirstPage: boolean = this.currentPage == 1;
    let onLastPage: boolean = this.currentPage == this.totalPages;

    if (!onLastPage && !onFirstPage) {
      // between first and last page
      this.prevPage = this.currentPage - 1;
      this.nextPage = this.currentPage + 1;
    } else if (onLastPage) {
      // last page
      this.prevPage = this.currentPage - 1;

      this.productsOnCurrentPage =
        this.totalProducts - this.productsPerPage * (this.currentPage - 1);
    } else {
      // first page
      this.nextPage = this.currentPage + 1;
    }

    this.calcLastRangeIndex();
  }

  calcLastRangeIndex(): void {
    if (this.productsOnCurrentPage < this.productsPerPage) {
      this.lastRangeIndex = this.totalProducts;
    } else {
      this.lastRangeIndex = this.productsOnCurrentPage * this.currentPage;
    }
  }
}
