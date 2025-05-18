import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { provideHttpClientTesting  } from '@angular/common/http/testing';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { provideHttpClient } from '@angular/common/http';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [provideHttpClientTesting(), provideHttpClient()]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    TestBed.inject(ProductController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
