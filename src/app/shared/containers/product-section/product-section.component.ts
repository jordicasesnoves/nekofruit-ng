import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/backendModels';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit(): void {}
}
