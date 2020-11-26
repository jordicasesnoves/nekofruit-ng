import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app-component/app.component';
import { HomeModule } from './fruits/home/home.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, CoreModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
