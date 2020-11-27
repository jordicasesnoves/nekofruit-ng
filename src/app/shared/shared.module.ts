import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemCardComponent } from './components/product-item-card/product-item-card.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductSectionComponent } from './containers/product-section/product-section.component';

@NgModule({
  declarations: [
    ProductItemCardComponent,
    ProductGridComponent,
    ProductSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProductItemCardComponent,
    ProductGridComponent,
    ProductSectionComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
