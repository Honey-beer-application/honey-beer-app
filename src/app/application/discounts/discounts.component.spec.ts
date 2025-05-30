import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsComponent } from './discounts.component';
import { provideHttpClient } from '@angular/common/http';
import { DiscountController } from 'src/app/Data/Controllers/DiscountController';
import { of, throwError } from 'rxjs';
import { Discount } from 'src/app/Data/Classes/Discount';
import { DiscountCardComponent } from './discount-card/discount-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('DiscountsComponent', () => {
  let component: DiscountsComponent;
  let fixture: ComponentFixture<DiscountsComponent>;
  let discountControllerSpyObj: jasmine.SpyObj<DiscountController>

  beforeEach(() => {
    discountControllerSpyObj = jasmine.createSpyObj('DiscountController',['loadAllDiscounts']);
    TestBed.configureTestingModule({
      declarations: [DiscountsComponent,DiscountCardComponent],
      providers: [provideHttpClient(),{provide: DiscountController, useValue: discountControllerSpyObj}]
    });
    discountControllerSpyObj = TestBed.inject(DiscountController) as jasmine.SpyObj<DiscountController>;
    discountControllerSpyObj.loadAllDiscounts.and.returnValue(of([new Discount(), new Discount()]));
    fixture = TestBed.createComponent(DiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should not collect discounts',()=>{
    let exception: CustomError = new CustomError('Discounts have not been loaded');
    discountControllerSpyObj.loadAllDiscounts.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>new DiscountsComponent(discountControllerSpyObj)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  })
});
