import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartViewComponent } from './containers/cart-view/cart-view.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';
import { CartService } from 'src/app/shared/services/cart.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [
    CartViewComponent,
    CartItemComponent,
    CartListComponent,
    CartSummaryComponent,
  ],
  providers: [CartService],
})
export class CartModule {}
