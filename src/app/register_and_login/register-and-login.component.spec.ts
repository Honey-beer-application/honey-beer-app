import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register-and-login.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { customMatchers } from './matchers';
import { testLoginFormData } from './test_data';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import Customer from '../Data/Classes/Customer';
import { BehaviorSubject, of, throwError } from 'rxjs';
import ICustomer from '../Data/Interfaces/ICustomer';
import CustomError from '../Data/Classes/CustomError';
import Company from '../Data/Classes/Company';
import CompanyController from '../Data/Controllers/CompanyController';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let customerControllerSpyObj: jasmine.SpyObj<CustomerController>;
  let registeredCustomerSpyObj: jasmine.SpyObj<BehaviorSubject<ICustomer>>;
  let companyControllerSpyObj: jasmine.SpyObj<CompanyController>;
  beforeEach(() => {
    registeredCustomerSpyObj = jasmine.createSpyObj('BehaviourSubject<ICustomer>',['next']);
    customerControllerSpyObj = jasmine.createSpyObj('CustomerController', ['createCustomer'], {registeredCustomer: registeredCustomerSpyObj});
    companyControllerSpyObj = jasmine.createSpyObj('CompanyController',['createCompany','setCompany']);
    jasmine.addMatchers(customMatchers);
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: CustomerController, useValue: customerControllerSpyObj},{provide: CompanyController, useValue: companyControllerSpyObj}]
    })
    customerControllerSpyObj = TestBed.inject(CustomerController) as jasmine.SpyObj<CustomerController>; 
    companyControllerSpyObj = TestBed.inject(CompanyController) as jasmine.SpyObj<CompanyController>;
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate customer form', ()=>{
    testLoginFormData.forEach(user=>{
      component.customerEmail.setValue(user.email);
      component.customerPassword.setValue(user.password);
      component.customerConfirmedPassword.setValue(user.confirmedPassword);
      component.customerUsername.setValue(user.username);
      component.customerForm.get("username")?.setValue(user.username);
      component.customerForm.get("email")?.setValue(user.email);
      component.customerForm.get("password")?.setValue(user.password);
      component.customerForm.get("confirmationPassword")?.setValue(user.confirmedPassword);
      expect(component.customerForm).toBeValidForm(user.expectedResult);
    });
  })
  it('should receive customer from customerController',()=>{
      let resultCustomer = new Customer();
      customerControllerSpyObj.createCustomer.and.returnValue(of(resultCustomer));
      spyOn(window, 'alert');
      component.saveCustomer();
      expect(window.alert).toHaveBeenCalledWith("Account is successfully created.");
  });
  it('should receive exception from customerController',()=>{
      let excpetionMessage: CustomError = new CustomError(("customer not valid"));
      customerControllerSpyObj.createCustomer.and.returnValue(throwError(()=>excpetionMessage));
      spyOn(window, 'alert');
      component.saveCustomer();
      expect(window.alert).toHaveBeenCalledWith(excpetionMessage.error.detail);
      
  });
  it('should receive company form companyController', ()=>{
    component.companyPIB.setValue(BigInt(1234567));
    component.companyEmail.setValue("company1@gmail.com");
    component.companyUsername.setValue("company1");
    component.companyPassword.setValue("company1");
    component.companyConfirmedPassword.setValue("company1");
    companyControllerSpyObj.createCompany.and.returnValue(of(
      new Company({
        PIB:component.companyPIB.getRawValue(),
        name:component.companyUsername.getRawValue(),
        email:component.companyEmail.getRawValue(),
        password:component.companyPassword.getRawValue()
      })
    ));
    spyOn(window, 'alert');
    component.saveCompany();
    expect(window.alert).toHaveBeenCalledWith("Company is successfuly registered.");
  });
  it('should receive exception from companyController',()=>{
    let error: CustomError = new CustomError("Company is not created");
    companyControllerSpyObj.createCompany.and.returnValue(throwError(()=>error));
    spyOn(window, 'alert');
    component.saveCompany();
    expect(window.alert).toHaveBeenCalledWith(error.message);
  });

});
