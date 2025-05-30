import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationComponent } from './create-reservation.component';
import { provideHttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { of, throwError } from 'rxjs';
import { Product } from 'src/app/Data/Classes/Product';
import { ProductCardComponent } from './product-card/product-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('CreateReservationComponent', () => {
  let component: CreateReservationComponent;
  let fixture: ComponentFixture<CreateReservationComponent>;
  let productControllerSpyObj : jasmine.SpyObj<ProductController>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    productControllerSpyObj = jasmine.createSpyObj('ProuctController',['loadAllProducts']);
    TestBed.configureTestingModule({
      declarations: [CreateReservationComponent, ProductCardComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(), provideHttpClientTesting(),{provide: ProductController, useValue: productControllerSpyObj}, FormBuilder]
    });
    formBuilder = TestBed.inject(FormBuilder);
    productControllerSpyObj = TestBed.inject(ProductController) as jasmine.SpyObj<ProductController>;
    productControllerSpyObj.loadAllProducts.and.returnValue(of([new Product({name:"Product 1",description:"Description 1",productId:1n}),new Product({name:"Product 2",description:"Description 2",productId:2n})]));
    fixture = TestBed.createComponent(CreateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load products with error',()=>{
    let exception : CustomError = new CustomError('Products not returned');
    productControllerSpyObj.loadAllProducts.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>new CreateReservationComponent(productControllerSpyObj, formBuilder)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
  it('should validate form',()=>{
    expect(()=>component.productsForm.setValue({
      name:"Product 1",
      description: "Description 1"
    })).not.toThrow();
  })
});
