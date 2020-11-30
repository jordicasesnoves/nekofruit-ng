import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeViewComponent } from './containers/home-view/home-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [CommonModule, HttpClientModule, SharedModule],
  declarations: [HomeViewComponent],
  providers: [],
})
export class HomeModule {}
