import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateOfferComponent } from '../create-offer/create-offer.component';
import { Product } from 'src/app/Data/Classes/Product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let productId: bigint = 1n;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [RouterTestingModule.withRoutes([{path:'app/new_offer/:id/create',component: CreateOfferComponent}])],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to create offer page without error',()=>{
    expect(()=>component.redirectToCreateOffer(new Product({productId:productId}))).not.toThrow();
  })
});
