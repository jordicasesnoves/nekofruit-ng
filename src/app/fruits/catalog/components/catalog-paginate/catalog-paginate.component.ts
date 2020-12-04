import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-paginate',
  templateUrl: './catalog-paginate.component.html',
  styleUrls: ['./catalog-paginate.component.scss'],
})
export class CatalogPaginateComponent implements OnInit {
  @Input() productsPerPage: number;
  @Input() currentPage: number;
  @Input() totalProducts: number;
  @Input() lastRangeIndex: number;
  @Input() prevPage: number;
  @Input() nextPage: number;

  @Output() navigateNextPage = new EventEmitter();
  @Output() navigatePrevPage = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNextPage(): void {
    this.navigateNextPage.emit();
  }

  onPrevPage(): void {
    this.navigatePrevPage.emit();
  }
}
