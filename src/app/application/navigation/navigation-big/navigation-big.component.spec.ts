import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBigComponent } from './navigation-big.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { BehaviorSubject, of, throwError } from 'rxjs';
import Company from 'src/app/Data/Classes/Company';
import CustomError from 'src/app/Data/Classes/CustomError';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import Customer from 'src/app/Data/Classes/Customer';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicationComponent } from '../../application.component';

describe('NavigationBigComponent', () => {
  let component: NavigationBigComponent;
  let fixture: ComponentFixture<NavigationBigComponent>;
  let companyControllerSpyObj: jasmine.SpyObj<CompanyController>;
  let customerControllerSpyObj: jasmine.SpyObj<CustomerController>;
  let registeredCustomerSpyObj: jasmine.SpyObj<BehaviorSubject<ICustomer>>;

  beforeEach(() => {
    companyControllerSpyObj = jasmine.createSpyObj('CompanyController',['deleteCompany','companyObservable','setCompany']);
    registeredCustomerSpyObj = jasmine.createSpyObj('<BehaviorSubject<ICustomer>>',['asObservable','next'])
    customerControllerSpyObj = jasmine.createSpyObj('CustomerController',['deleteCustomer'],{registeredCustomer: registeredCustomerSpyObj});
    TestBed.configureTestingModule({
      declarations: [NavigationBigComponent],
      imports: [MatIconModule, RouterTestingModule.withRoutes([{path:"app",component: ApplicationComponent}])],
      providers: [provideHttpClient(),{provide: CompanyController, useValue: companyControllerSpyObj},{provide: CustomerController, useValue: customerControllerSpyObj}]
    });
    companyControllerSpyObj = TestBed.inject(CompanyController) as jasmine.SpyObj<CompanyController>;
    companyControllerSpyObj.companyObservable.and.returnValue(of(new Company()));
    companyControllerSpyObj.deleteCompany.and.returnValue(of(new Company()));
    customerControllerSpyObj = TestBed.inject(CustomerController) as jasmine.SpyObj<CustomerController>;
    registeredCustomerSpyObj.asObservable.and.returnValue(of(new Customer()));
    fixture = TestBed.createComponent(NavigationBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete account',()=>{
    spyOn(window,'alert');
    component.deleteAccount();
    expect(window.alert).toHaveBeenCalledWith('Account has been successfuly deleted.');
  });

  it('should not delete account',()=>{
    let exception: CustomError = new CustomError('object not deleted');
    companyControllerSpyObj.deleteCompany.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    component.deleteAccount();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });

  it('should delete customer account',()=>{
    customerControllerSpyObj.deleteCustomer.and.returnValue(of(new Customer()));
    spyOn(window,'alert');
    component.deleteCustomerAccount();
    expect(window.alert).toHaveBeenCalledWith('Personal account was successfuly deleted.');
  });

  it('should not delete customer account',()=>{
    let exception: CustomError = new CustomError('Customer not created.');
    customerControllerSpyObj.deleteCustomer.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    component.deleteCustomerAccount();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });

  it('should set image',()=>{
    expect(()=>component.setImage("#")).not.toThrow();
  });

  it('should redirect to main page',()=>{
    expect(()=>component.redirectTo('app')).not.toThrow();
  })
});
