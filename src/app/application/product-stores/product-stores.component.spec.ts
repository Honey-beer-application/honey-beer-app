import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStoresComponent } from './product-stores.component';
import { provideHttpClient } from '@angular/common/http';
import { ShoppingLocationController } from 'src/app/Data/Controllers/ShoppingLocationController';
import { of, throwError } from 'rxjs';
import { ShoppingLocation } from 'src/app/Data/Classes/ShoppingLocation';
import { ProductStoreCardComponent } from './product-store-card/product-store-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('ProductStoresComponent', () => {
  let component: ProductStoresComponent;
  let fixture: ComponentFixture<ProductStoresComponent>;
  let shoppingLocationSpyObj: jasmine.SpyObj<ShoppingLocationController>;

  beforeEach(() => {
    shoppingLocationSpyObj = jasmine.createSpyObj('ShoppingLocationController',['loadAllShoppingLocations']);
    TestBed.configureTestingModule({
      declarations: [ProductStoresComponent,ProductStoreCardComponent],
      providers: [provideHttpClient(),{provide:ShoppingLocationController,useValue: shoppingLocationSpyObj}],
    });
    shoppingLocationSpyObj.loadAllShoppingLocations.and.returnValue(of([new ShoppingLocation(), new ShoppingLocation()]))
    fixture = TestBed.createComponent(ProductStoresComponent);
    TestBed.inject(ShoppingLocationController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return error after fetching shopping locations',()=>{
    spyOn(window,'alert');
    let exception: CustomError = new CustomError('objects not loaded');
    shoppingLocationSpyObj.loadAllShoppingLocations.and.returnValue(throwError(()=>exception))
    expect(()=>new ProductStoresComponent(shoppingLocationSpyObj)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
});
