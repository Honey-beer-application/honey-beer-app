import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductComponent } from '../../products/product/product.component';
import { Product } from 'src/app/Data/Classes/Product';
import { NewReservationComponent } from '../new-reservation/new-reservation.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let productId:bigint = 1n;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [RouterModule, RouterTestingModule.withRoutes([{path:'app/products/'+productId, component: ProductComponent},{path:'app/create-reservation/'+productId+"/new-reservation", component: NewReservationComponent}])],
      providers: [provideHttpClientTesting(), provideHttpClient()]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    TestBed.inject(ProductController);
    TestBed.inject(ReservationController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to product page without error',()=>{
    expect(()=>component.redirectToProduct(new Product({productId:productId}))).not.toThrow();
  });

  it('should redirect to new reservation page without error',()=>{
    expect(()=>component.redirectToNewReservation(new Product({productId:productId}))).not.toThrow();
  })
});
