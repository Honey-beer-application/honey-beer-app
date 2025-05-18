import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoreCardComponent } from './product-store-card.component';
import { provideHttpClient } from '@angular/common/http';

describe('ProductStoreCardComponent', () => {
  let component: ProductStoreCardComponent;
  let fixture: ComponentFixture<ProductStoreCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductStoreCardComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(ProductStoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
