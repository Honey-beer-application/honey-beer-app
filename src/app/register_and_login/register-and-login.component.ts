import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Location } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import Customer from '../Data/Classes/Customer';
import ICustomer from '../Data/Interfaces/ICustomer';
import CompanyController from '../Data/Controllers/CompanyController';
import Company from '../Data/Classes/Company';
import CustomError from '../Data/Classes/CustomError';

@Component({
  selector: 'app-register-and-login',
  templateUrl: './register-and-login.component.html',
  styleUrls: ['./register-and-login.component.scss']
})
export class RegisterAndLoginComponent implements AfterViewInit {
  
  //##################
  //  CUSTOMER FORM
  //##################
  public customerForm:FormGroup;
  public customerUsername:FormControl = new FormControl("",[Validators.required,Validators.maxLength(50)]);
  public customerEmail: FormControl = new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  public customerPassword:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);
  public customerConfirmedPassword:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);
  
  //##################
  //  COMPANY FORM
  //##################

  public companyForm:FormGroup;
  public companyPIB:FormControl<bigint|null> = new FormControl(BigInt(0),[Validators.required,Validators.min(10000001),Validators.max(99999999)]);
  public companyUsername:FormControl<string|null> = new FormControl("",[Validators.required,Validators.maxLength(50)]);
  public companyEmail: FormControl<string|null> = new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  public companyPassword:FormControl<string|null> = new FormControl("",[Validators.required,Validators.minLength(8)]);
  public companyConfirmedPassword:FormControl<string|null> = new FormControl("",[Validators.required,Validators.minLength(8)]);

  //##################
  //  CUSTOMER
  //##################
  private readonly customer:ICustomer;

  //##################
  //  COMPANY
  //##################
  private readonly company:Company;

  @ViewChild('register') signUpButton:ElementRef = new ElementRef(document.getElementById('register'));
  @ViewChild('signIn') signInButton:ElementRef = new ElementRef(document.getElementById('signIn'));
  @ViewChild('main') main:ElementRef = new ElementRef(document.getElementById('main'));


  constructor(
    private readonly location:Location,
    private readonly router:Router,
    public fb:FormBuilder,
    private readonly customerController:CustomerController,
    private readonly companyController:CompanyController
    ){
    
    this.customer = new Customer();
    this.company = new Company();

    this.customerForm = fb.group({
      username:this.customerUsername,
      password:this.customerPassword,
      confirmationPassword: this.customerConfirmedPassword,
      email: this.customerEmail
    },
    {
      validator: (formGroup: FormGroup): ValidationErrors | null => {
        const [password, confirmationPassword] = [
          formGroup.get("password")?.value,
          formGroup.get("confirmationPassword")?.value
        ];
        return password !== confirmationPassword? {passwordNotMatched: "Passwords are not matching"}: null;
      }
    } as AbstractControlOptions)

    this.customerForm.valueChanges
    .pipe(filter(data=>this.customerForm.valid&&data.password==data.confirmationPassword))
    .subscribe(data=>{this.customer.username=data.username;this.customer.email=data.email;this.customer.password=data.password;});

    this.companyForm = fb.group({
      companyPIB:this.companyPIB,
      companyUsername:this.companyUsername,
      companyEmail: this.companyEmail,
      companyPassword: this.companyPassword,
      companyConfirmedPassword: this.companyConfirmedPassword
    },
    {
        validator: (formGroup: FormGroup): ValidationErrors | null => {
          const [companyPassword, companyConfirmedPassword] = [
            formGroup.get("companyPassword")?.value,
            formGroup.get("companyConfirmedPassword")?.value
          ];
          return companyPassword !== companyConfirmedPassword? {passwordNotMatched: "Passwords are not matching"}: null;
        }
      } as AbstractControlOptions);

    this.companyForm.valueChanges
    .pipe(filter(_=>this.companyForm.valid))
    .subscribe(data=>{this.company.PIB=data.companyPIB;this.company.email=data.companyEmail;this.company.name=data.companyUsername;this.company.password=data.companyPassword});
  }

  ngAfterViewInit(): void {
    this.signUpButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.add("right-panel-active");
    });
    this.signInButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.remove("right-panel-active");
    });
  }
  
  backToPrevoiusPage(){
    if (history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  public saveCustomer():void{
    this.customerController.createCustomer(this.customer.username,this.customer.email,this.customer.password)
    .subscribe({
      next:(res:ICustomer) =>{
      this.customerController.registeredCustomer.next(res);
      alert("Account is successfully created.");
    },
    error:(error: CustomError)=>{alert(error.error.detail)}
    });
  }
  public saveCompany():void{
    this.companyController.createCompany(this.company.PIB,this.company.name,this.company.email,this.company.password)
    .subscribe({
      next:()=>{
      alert("Company is successfuly registered.");
      this.companyController.setCompany(this.company);
    },
    error:(error)=>alert(error.error.detail)
    });
  }
}
