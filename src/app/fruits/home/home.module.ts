import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeViewComponent } from './containers/home-view/home-view.component';
import { ProductsService } from './services/products.service';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [HomeViewComponent],
  providers: [ProductsService],
})
export class HomeModule {}
