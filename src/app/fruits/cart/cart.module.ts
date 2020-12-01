import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsService } from '../../shared/services/products.service';
import { CartViewComponent } from './containers/cart-view/cart-view.component';
import { CartViewSummaryComponent } from './components/cart-view-summary/cart-view-summary.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [CartViewComponent, CartViewSummaryComponent, CartItemComponent],
  providers: [ProductsService],
})
export class CartModule {}
