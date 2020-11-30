import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/backendModels';
import { ProductSectionInfo } from 'src/app/shared/models/product-section';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  topSellingProducts$: Observable<Product[]>;
  newProducts$: Observable<Product[]>;

  topSellingProductsSectionInfo: ProductSectionInfo = {
    title: 'Top selling',
    emoji: '🔥',
  };

  newProductsSectionInfo: ProductSectionInfo = {
    title: 'New Products',
    emoji: '🆕',
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.topSellingProducts$ = this.productsService.getTopSellingProducts();
    this.newProducts$ = this.productsService.getNewProducts();
  }
}
