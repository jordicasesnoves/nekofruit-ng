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
  catalogProducts: Product[] = [];

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

  private subscriptions = new Subscription();

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.queryParams.subscribe((params) => {
        this.prevPage = undefined;
        this.nextPage = undefined;
        this.currentPage = parseInt(params['page']);

        // Prevent calculating pagination when data is not ready yet
        if (!this.loading) {
          this.calculatePagination();
        }
      })
    );

    this.getCatalogProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCatalogProducts(): void {
    this.subscriptions.add(
      this.productsService.getAllProducts().subscribe(
        (data) => {
          this.catalogProducts = data;
          this.totalProducts = data.length;
          this.totalPages = Math.ceil(data.length / this.productsPerPage);
          this.calculatePagination();
          this.loading = false;
        },
        (err) => {
          console.log(err);
        }
      )
    );
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
}
