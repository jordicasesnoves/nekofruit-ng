import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/backendModels';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss'],
})
export class ProductItemCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}
}
