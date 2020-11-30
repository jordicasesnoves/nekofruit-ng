import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CartViewComponent } from './fruits/cart/containers/cart-view/cart-view.component';
import { CatalogViewComponent } from './fruits/catalog/containers/catalog-view/catalog-view.component';
import { HomeViewComponent } from './fruits/home/containers/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'catalog',
    component: CatalogViewComponent,
  },
  {
    path: 'cart',
    component: CartViewComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
