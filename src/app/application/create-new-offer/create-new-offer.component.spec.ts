import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewOfferComponent } from './create-new-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { of, throwError } from 'rxjs';
import { Product } from 'src/app/Data/Classes/Product';
import { ProductCardComponent } from './product-card/product-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('CreateNewOfferComponent', () => {
  let component: CreateNewOfferComponent;
  let fixture: ComponentFixture<CreateNewOfferComponent>;
  let productControllerSpyObj: jasmine.SpyObj<ProductController>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    productControllerSpyObj = jasmine.createSpyObj('ProductController',['loadAllProducts']);
    TestBed.configureTestingModule({
      declarations: [CreateNewOfferComponent, ProductCardComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(), {provide: ProductController, useValue: productControllerSpyObj},FormBuilder]
    });
    productControllerSpyObj = TestBed.inject(ProductController) as jasmine.SpyObj<ProductController>;
    productControllerSpyObj.loadAllProducts.and.returnValue(of([new Product({productId:1n,name:'name',description:'description'}),new Product({productId:2n,name:'name',description:'description'})]))
    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(CreateNewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create instance with not products',()=>{
    let exception: CustomError = new CustomError('Products have not been returned');
    productControllerSpyObj.loadAllProducts.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>new CreateNewOfferComponent(productControllerSpyObj, formBuilder)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
  it('should validate filtering form',()=>{
    let testingData: {name: string, description: string}[] = [
    {name:"name", description: "description"}
    ];
    let comp = new CreateNewOfferComponent(productControllerSpyObj,formBuilder);
    testingData.forEach((data:{name: string, description: string})=>{
      expect(()=>{
        comp.productsForm.setValue({
        name:data.name,
        description: data.description
      });
      }).not.toThrow();
    });
  });
});
