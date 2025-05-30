import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SentCompanyEmailController } from 'src/app/Data/Controllers/SentCompanyEmailController';
import { BehaviorSubject, of, throwError } from 'rxjs';
import CustomError from 'src/app/Data/Classes/CustomError';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';
import Customer from 'src/app/Data/Classes/Customer';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let sentCompanyEmailControllerSpyObj: jasmine.SpyObj<SentCompanyEmailController>;
  let customerController: CustomerController;

  beforeEach(() => {
    sentCompanyEmailControllerSpyObj = jasmine.createSpyObj("SentCompanyEmailController",['saveCompanyEmail']);
    TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: SentCompanyEmailController, useValue: sentCompanyEmailControllerSpyObj}, CustomerController]
    });
    sentCompanyEmailControllerSpyObj = TestBed.inject(SentCompanyEmailController) as jasmine.SpyObj<SentCompanyEmailController>;
    customerController = TestBed.inject(CustomerController);
    customerController.registeredCustomer = new BehaviorSubject<ICustomer>(new Customer({customerId:1n}));
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.email,"send").and.callFake(function(serviceID:string,templateID:string){
      return Promise.resolve({status:200,text:"Email is sent"});
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should verify fields',()=>{
    expect(()=>component.verifiyFields({from_email:"email@email.com",title:"Title 1",message:"Message"})).not.toThrow();
  });
  it('should send email',()=>{
    sentCompanyEmailControllerSpyObj.saveCompanyEmail.and.returnValue(of(true));
    spyOn(window,'alert');
    expect(()=>{
      component.emailForm.setValue({
        from_email: "email@gmail.com",
        title:"Title",
        message:"Message"
      });
      component.sendEmail();
    }).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith('Email is registered in database.');
  });
  it('should not register email',()=>{
    let exception: CustomError = new CustomError('Email not registered');
    sentCompanyEmailControllerSpyObj.saveCompanyEmail.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>{
      component.emailForm.setValue({
        from_email: "email@gmail.com",
        title:"Title",
        message:"Message"
      });
      component.sendEmail();
    }).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
});

