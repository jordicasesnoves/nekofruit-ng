import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPaginateComponent } from './catalog-paginate.component';

describe('CatalogPaginateComponent', () => {
  let component: CatalogPaginateComponent;
  let fixture: ComponentFixture<CatalogPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPaginateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
