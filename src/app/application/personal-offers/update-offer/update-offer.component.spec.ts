import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfferComponent } from './update-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import IOfferByCompany from 'src/app/Data/Interfaces/IOfferByCompany';
import OfferByCompany from 'src/app/Data/Classes/OfferByCompany';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('UpdateOfferComponent', () => {
  let component: UpdateOfferComponent;
  let fixture: ComponentFixture<UpdateOfferComponent>;
  let offerByCompanyControllerSpyObj: jasmine.SpyObj<OfferByCompanyController>;
  let offerByCompanyToLoadObservableSpyObj: jasmine.SpyObj<Observable<IOfferByCompany>>

  beforeEach(() => {
    offerByCompanyControllerSpyObj = jasmine.createSpyObj('CompanyController',['changeOfferByCompany','getOfferByCompany','offerByCompanyToLoadObservable']);
    TestBed.configureTestingModule({
      declarations: [UpdateOfferComponent],
      imports:[RouterTestingModule,ReactiveFormsModule],
      providers: [provideHttpClient(), {provide: OfferByCompanyController, useValue: offerByCompanyControllerSpyObj}]
    });
    offerByCompanyControllerSpyObj.getOfferByCompany.and.returnValue(of(new OfferByCompany()));
    offerByCompanyControllerSpyObj.changeOfferByCompany.and.returnValue(of(true));
    offerByCompanyControllerSpyObj = TestBed.inject(OfferByCompanyController) as jasmine.SpyObj<OfferByCompanyController>;
    TestBed.inject(OfferByCompanyController);
    TestBed.inject(CompanyController);
    offerByCompanyControllerSpyObj.offerByCompanyToLoadObservable = of(new OfferByCompany());
    fixture = TestBed.createComponent(UpdateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save offer by company', ()=>{
    offerByCompanyControllerSpyObj.changeOfferByCompany.and.returnValue(of(true));
    spyOn(window,'alert');
    component.saveOfferByComapny();
    expect(window.alert).toHaveBeenCalledWith("Offer is successfully changed.");
  });

  it('should not save offer by company', ()=>{
    let exception : CustomError = new CustomError('Data hasn\'t been received');
    offerByCompanyControllerSpyObj.changeOfferByCompany.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    component.saveOfferByComapny();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });

  it('should validate offer by company form',()=>{
    component.offerByCompanyForm.setValue({
      'discount':5,
      'beginDate':'01-05-2025',
      'endDate':'31-05-2025'
    });
    expect(component.offerByCompanyForm.valid).toEqual(true);
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
