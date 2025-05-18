import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoresComponent } from './product-stores.component';
import { provideHttpClient } from '@angular/common/http';
import { ShoppingLocationController } from 'src/app/Data/Controllers/ShoppingLocationController';

describe('ProductStoresComponent', () => {
  let component: ProductStoresComponent;
  let fixture: ComponentFixture<ProductStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductStoresComponent],
      providers: [
                      // ... other test providers
                      provideHttpClient(),
                  ],
    });
    fixture = TestBed.createComponent(ProductStoresComponent);
    TestBed.inject(ShoppingLocationController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
