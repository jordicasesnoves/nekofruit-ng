import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app-component/app.component';
import { HomeModule } from './fruits/home/home.module';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './fruits/catalog/catalog.module';
import { CartModule } from './fruits/cart/cart.module';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    CatalogModule,
    CartModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
