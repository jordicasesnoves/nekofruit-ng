import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app-component/app.component';
import { HomeModule } from './fruits/home/home.module';
import { CartViewComponent } from './fruits/cart/containers/cart-view/cart-view.component';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './fruits/catalog/catalog.module';

@NgModule({
  declarations: [CartViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    CatalogModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
