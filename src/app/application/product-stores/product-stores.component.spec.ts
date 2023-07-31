import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoresComponent } from './product-stores.component';

describe('ProductStoresComponent', () => {
  let component: ProductStoresComponent;
  let fixture: ComponentFixture<ProductStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductStoresComponent]
    });
    fixture = TestBed.createComponent(ProductStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
