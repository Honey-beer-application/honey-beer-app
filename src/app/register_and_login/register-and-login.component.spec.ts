import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAndLoginComponent } from './register-and-login.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { customMatchers } from '../../match_config/matchers';
import { testLoginFormData } from './test_data';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import Customer from '../Data/Classes/Customer';
import { BehaviorSubject, Observable, of, Subscription, throwError } from 'rxjs';
import ICustomer from '../Data/Interfaces/ICustomer';
import CustomError from '../Data/Classes/CustomError';
import Company from '../Data/Classes/Company';
import CompanyController from '../Data/Controllers/CompanyController';
import { By } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

describe('RegisterAndLoginComponent', () => {
  let component: RegisterAndLoginComponent;
  let fixture: ComponentFixture<RegisterAndLoginComponent>;
  let customerControllerSpyObj: jasmine.SpyObj<CustomerController>;
  let registeredCustomerSpyObj: jasmine.SpyObj<BehaviorSubject<ICustomer>>;
  let companyControllerSpyObj: jasmine.SpyObj<CompanyController>;
  let routerSpyObj: jasmine.SpyObj<Router>;
  beforeEach(() => {
    registeredCustomerSpyObj = jasmine.createSpyObj('BehaviourSubject<ICustomer>',['next']);
    customerControllerSpyObj = jasmine.createSpyObj('CustomerController', ['createCustomer'], {registeredCustomer: registeredCustomerSpyObj});
    companyControllerSpyObj = jasmine.createSpyObj('CompanyController',['createCompany','setCompany']);
    routerSpyObj = jasmine.createSpyObj('Router',['navigateByUrl'],{events: new Observable(observer => {
                                                                                  observer.next(new NavigationEnd(0, 'http://localhost:4200/app', 'http://localhost:4200/app'));
                                                                                  observer.complete();
                                                                                })})
    jasmine.addMatchers(customMatchers);
    TestBed.configureTestingModule({
      declarations: [RegisterAndLoginComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: CustomerController, useValue: customerControllerSpyObj},{provide: CompanyController, useValue: companyControllerSpyObj}, {provide: Router, useValue: routerSpyObj}]
    });
    routerSpyObj = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    customerControllerSpyObj = TestBed.inject(CustomerController) as jasmine.SpyObj<CustomerController>; 
    companyControllerSpyObj = TestBed.inject(CompanyController) as jasmine.SpyObj<CompanyController>;
    fixture = TestBed.createComponent(RegisterAndLoginComponent);
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
      component.customerForm.controls["username"].setValue(user.username);
      component.customerForm.controls["email"].setValue(user.email);
      component.customerForm.controls["password"].setValue(user.password);
      component.customerForm.controls["confirmationPassword"].setValue(user.confirmedPassword);
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
  it('should validate company form',()=>{
    component.companyForm.controls['companyPIB'].setValue(BigInt(10000001));
    component.companyForm.controls['companyUsername'].setValue("company1");
    component.companyForm.controls['companyEmail'].setValue('company1@gmail.com');
    component.companyForm.controls['companyPassword'].setValue('company1');
    component.companyForm.controls['companyConfirmedPassword'].setValue('company1');
    expect(component.companyForm.valid).toEqual(true);
  });
  it('should trigger event listeners',()=>{
    component.ngAfterViewInit();
    const signUpButton = fixture.debugElement.query(By.css('#register'));
    const signInButton = fixture.debugElement.query(By.css('#signIn'));
    expect(()=>{
      signUpButton.nativeElement.click();
      signInButton.nativeElement.click();
    }).not.toThrow();
    
  });
  it('should execute backToPreviousPage function without error', ()=>{
    spyOn(routerSpyObj.events,'subscribe').and.returnValue(new Subscription(()=>new NavigationEnd(1,'','/')));
    routerSpyObj.navigateByUrl.and.callThrough();
    expect(()=>component.backToPrevoiusPage()).not.toThrow();
  });
  it('should get one page back',()=>{
    window.history.pushState({ patientId: 'somevalue'}, '', '');
    window.history.pushState({ patientId: 'somevalue'}, '', '');
    expect(()=>component.backToPrevoiusPage()).not.toThrow();
  });
  it('should ge to main page',()=>{
    window.history.replaceState([],'','/');
    expect(()=>component.backToPrevoiusPage()).not.toThrow();
  })
});
