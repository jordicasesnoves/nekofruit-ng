import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-view-summary',
  templateUrl: './cart-view-summary.component.html',
  styleUrls: ['./cart-view-summary.component.scss'],
})
export class CartViewSummaryComponent implements OnInit {
  @Input() cartItems: CartItem[];

  constructor() {}

  ngOnInit(): void {}
}
