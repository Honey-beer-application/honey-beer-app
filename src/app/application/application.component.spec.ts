import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationComponent } from './application.component';
import { provideHttpClient } from '@angular/common/http';
import { NavigationBigComponent } from './navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from './navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from './navigation/navigation-small/navigation-small.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailController } from '../Data/Controllers/EmailController';
import { BehaviorSubject, of, throwError } from 'rxjs';
import CustomError from '../Data/Classes/CustomError';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import Customer from '../Data/Classes/Customer';
import ICustomer from '../Data/Interfaces/ICustomer';

describe('ApplicationComponent', () => {
  let component: ApplicationComponent;
  let fixture: ComponentFixture<ApplicationComponent>;
  let emailControllerSpyObj: jasmine.SpyObj<EmailController>;
  let customerController: CustomerController;

  beforeEach(() => {
    emailControllerSpyObj = jasmine.createSpyObj('EmailController',['saveEmail']);
    TestBed.configureTestingModule({
      declarations: [ApplicationComponent,NavigationBigComponent,NavigationMediumComponent,NavigationSmallComponent],
      imports: [RouterModule,MatIconModule,ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: EmailController, useValue: emailControllerSpyObj},CustomerController]
    });
    emailControllerSpyObj = TestBed.inject(EmailController) as jasmine.SpyObj<EmailController>;
    customerController = TestBed.inject(CustomerController);
    customerController.registeredCustomer = new BehaviorSubject<ICustomer>(new Customer({customerId:1n,email:"user1@gmail.com"}));
    fixture = TestBed.createComponent(ApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.email,"send").and.callFake(function(_serviceID:string,_templateID:string){
      return Promise.resolve({status:200,text:"Email is sent"});
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form',()=>{
    expect(()=>component.emailForm.setValue({
      from_email: 'email@gmail.com',
      title: 'Title 1',
      message: 'Message 1'
    })).not.toThrow();
  });
  it('Should register sent email',()=>{
    emailControllerSpyObj.saveEmail.and.returnValue(of(true));
    spyOn(window,'alert');
    expect(()=>component.sendEmail()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith("Email has been successfully sent")
  });
  it('Should not register sent email',()=>{
    let exception : CustomError = new CustomError('Sent email isn\'t registered');
    emailControllerSpyObj.saveEmail.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert')
    expect(()=>component.sendEmail()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
});
