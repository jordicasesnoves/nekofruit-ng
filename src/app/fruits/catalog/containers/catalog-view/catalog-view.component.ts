import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/backendModels';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  currentPage: number;
  prevPage: number;
  nextPage: number;

  loading: boolean = true;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
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
      complete() {},
    });

    this.catalogProducts$ = this.productsService.getAllProducts();
    this.loading = false;
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
    } else {
      // first page
      this.nextPage = this.currentPage + 1;
    }

    if (this.currentPage > this.totalPages) {
      this.redirectTo404();
    }
  }

  onNextPage(): void {
    this.router.navigate(['/catalog'], {
      queryParams: { page: this.nextPage },
    });
  }

  onPrevPage(): void {
    this.router.navigate(['/catalog'], {
      queryParams: { page: this.prevPage },
    });
  }

  redirectTo404(): void {
    this.router.navigate(['/404']);
  }
}
