import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './containers/app-component/app.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
})
export class CoreModule {}
