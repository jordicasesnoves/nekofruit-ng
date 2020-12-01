import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewSummaryComponent } from './cart-view-summary.component';

describe('CartViewSummaryComponent', () => {
  let component: CartViewSummaryComponent;
  let fixture: ComponentFixture<CartViewSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartViewSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartViewSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
