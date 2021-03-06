import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogViewComponent } from './containers/catalog-view/catalog-view.component';
import { ProductsService } from '../../shared/services/products.service';
import { CatalogPaginateComponent } from './components/catalog-paginate/catalog-paginate.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [CatalogViewComponent, CatalogPaginateComponent],
  providers: [ProductsService],
})
export class CatalogModule {}
