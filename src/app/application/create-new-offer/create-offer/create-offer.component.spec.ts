import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferComponent } from './create-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import OfferController from 'src/app/Data/Controllers/OfferController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { of, throwError } from 'rxjs';
import Company from 'src/app/Data/Classes/Company';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('CreateOfferComponent', () => {
  let component: CreateOfferComponent;
  let fixture: ComponentFixture<CreateOfferComponent>;
  let offerControllerSpyObj: jasmine.SpyObj<OfferController>;
  let companyControllerSpyObj: jasmine.SpyObj<CompanyController>;

  beforeEach(() => {
    offerControllerSpyObj = jasmine.createSpyObj('OfferController',['saveOffer']);
    companyControllerSpyObj = jasmine.createSpyObj('CompanyController',['companyObservable'])
    TestBed.configureTestingModule({
      declarations: [CreateOfferComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide:OfferController,useValue: offerControllerSpyObj},{provide: CompanyController,useValue: companyControllerSpyObj}]
    });
    offerControllerSpyObj = TestBed.inject(OfferController) as jasmine.SpyObj<OfferController>;
    offerControllerSpyObj.saveOffer.and.returnValue(of(true));
    companyControllerSpyObj = TestBed.inject(CompanyController) as jasmine.SpyObj<CompanyController>;
    companyControllerSpyObj.companyObservable.and.returnValue(of(new Company({PIB:100001n})));
    fixture = TestBed.createComponent(CreateOfferComponent);
    TestBed.inject(OfferController);
    TestBed.inject(CompanyController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate offer by company form',()=>{
    expect(()=>{
      component.offerByCompanyForm.setValue({
        discount:1,
        beginDate: new Date(),
        endDate: new Date()
      });
    }).not.toThrow();
  });
  it('should save offer',()=>{
    expect(()=>component.saveOffer()).not.toThrow();
  });
  it('should not save offer',()=>{
    let exception: CustomError = new CustomError('offer is not saved');
    offerControllerSpyObj.saveOffer.and.returnValue(throwError(()=> exception));
    spyOn(window,'alert');
    expect(()=>component.saveOffer()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
  it('should conert single digit day with 2 digit month',()=>{
    expect(component.convertDate(new Date(2025,10,5))).toEqual('2025-11-05')
  });
  it('should create offer wiithout',()=>{
    component.offer.productInstance = null;
    expect(()=>component.saveOffer()).not.toThrow();
  });
   it('should convert 2 digit date',()=>{
    expect(component.convertDate(new Date(2025,10,10))).toEqual('2025-11-10')
  })
});
