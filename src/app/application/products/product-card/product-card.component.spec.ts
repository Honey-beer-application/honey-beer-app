import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { provideHttpClientTesting  } from '@angular/common/http/testing';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { provideHttpClient } from '@angular/common/http';
import { Product } from 'src/app/Data/Classes/Product';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from '../product/product.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let productId: bigint = 1n;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [provideHttpClientTesting(), provideHttpClient()],
      imports: [RouterTestingModule.withRoutes([{path:'app/products/'+productId, component: ProductComponent}])]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    TestBed.inject(ProductController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to product page without error',()=>{
    expect(()=>component.redirectToProduct(new Product({productId:productId}))).not.toThrow();
  });
  
});
