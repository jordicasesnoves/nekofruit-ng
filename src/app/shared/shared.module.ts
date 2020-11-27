import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemCardComponent } from './components/product-item-card/product-item-card.component';

@NgModule({
  declarations: [ProductItemCardComponent],
  imports: [CommonModule],
  exports: [ProductItemCardComponent],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
