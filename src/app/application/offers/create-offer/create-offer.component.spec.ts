import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferComponent } from './create-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('CreateOfferComponent', () => {
  let component: CreateOfferComponent;
  let fixture: ComponentFixture<CreateOfferComponent>;
  let offerByCompanyControllerSpyObj: jasmine.SpyObj<OfferByCompanyController>;

  beforeEach(() => {
    offerByCompanyControllerSpyObj = jasmine.createSpyObj('OfferByCompanyController',['saveOfferByCompany']);
    TestBed.configureTestingModule({
      declarations: [CreateOfferComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: OfferByCompanyController, useValue: offerByCompanyControllerSpyObj}],
    });
    offerByCompanyControllerSpyObj = TestBed.inject(OfferByCompanyController) as jasmine.SpyObj<OfferByCompanyController>;
    fixture = TestBed.createComponent(CreateOfferComponent);
    component = fixture.componentInstance;
    component.offerByCompanyForm.setValue({
      discount: 5,
      beginDate: new Date().toLocaleDateString(),
      endDate: new Date().toLocaleDateString()
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create offer by company',()=>{
    offerByCompanyControllerSpyObj.saveOfferByCompany.and.returnValue(of(true));
    spyOn(window,'alert')
    expect(()=>component.saveOfferByComapny()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith("Offer is successfully saved.");
  });
  it('should not create offer by company',()=>{
    let exception: CustomError = new CustomError('object not created');
    offerByCompanyControllerSpyObj.saveOfferByCompany.and.returnValue(throwError(()=>exception))
    spyOn(window,'alert')
    expect(()=>component.saveOfferByComapny()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
  it('should convert date',()=>{
    let date: Date = new Date(2025,10,5);
    expect(component.convertDate(date)).toEqual("2025-11-05")
  });
  it('should convert date',()=>{
    let date: Date = new Date(2025,10,10);
    expect(component.convertDate(date)).toEqual("2025-11-10")
  });
});
