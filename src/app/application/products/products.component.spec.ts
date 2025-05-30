import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { of, throwError } from 'rxjs';
import { Product } from 'src/app/Data/Classes/Product';
import CustomError from 'src/app/Data/Classes/CustomError';
import IProduct from 'src/app/Data/Interfaces/IProduct';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productControllerSpyObj: jasmine.SpyObj<ProductController>

  beforeEach(() => {
    productControllerSpyObj = jasmine.createSpyObj('ProductController',['loadAllProducts']);
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule],
      providers: [{prodive: ProductController, useValue: productControllerSpyObj}]
    });
    productControllerSpyObj.loadAllProducts.and.returnValue(of([new Product(), new Product()]));
    TestBed.inject(ProductController);
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create instance with exception',()=>{
    let exception: CustomError = new CustomError('Data not returned');
    productControllerSpyObj.loadAllProducts.and.returnValue(throwError(()=>exception));
    spyOn(window, 'alert');
    expect(()=>new ProductsComponent(productControllerSpyObj)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });

  it('should create instance with data',()=>{
    let productData: IProduct[] = [new Product()];
    productControllerSpyObj.loadAllProducts.and.returnValue(of(productData));
    expect(()=>new ProductsComponent(productControllerSpyObj)).not.toThrow();
  })
});
