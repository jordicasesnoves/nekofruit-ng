import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor() {}

  ngOnInit(): void {}
}
