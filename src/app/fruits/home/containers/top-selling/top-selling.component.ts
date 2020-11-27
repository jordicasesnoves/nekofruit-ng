import { NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/shared/models/backendModels';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss'],
})
export class TopSellingComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit(): void {}
}
