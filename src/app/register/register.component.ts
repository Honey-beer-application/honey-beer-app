import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import CustomerController from './../Data/Controllers/CustomerConstroller';
import Customer from './../Data/Classes/Customer';
import ICustomer from './../Data/Interfaces/ICustomer';
import CompanyController from './../Data/Controllers/CompanyController';
import Company from './../Data/Classes/Company';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit {
  
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
  public companyPIB:FormControl = new FormControl("",[Validators.required,Validators.min(10000001),Validators.max(99999999)]);
  public companyUsername:FormControl = new FormControl("",[Validators.required,Validators.maxLength(50)]);
  public companyEmail: FormControl = new FormControl("", [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  public companyPassword:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);
  public companyConfirmedPassword:FormControl = new FormControl("",[Validators.required,Validators.minLength(8)]);

  //##################
  //  CUSTOMER
  //##################
  private customer:ICustomer;

  //##################
  //  COMPANY
  //##################
  private company:Company;

  @ViewChild('register') signUpButton:ElementRef = new ElementRef(document.getElementById('register'));
  @ViewChild('signIn') signInButton:ElementRef = new ElementRef(document.getElementById('signIn'));
  @ViewChild('main') main:ElementRef = new ElementRef(document.getElementById('main'));


  private history: string[] = [];


  constructor(
    private location:Location,
    private router:Router,
    private fb:FormBuilder,
    private customerController:CustomerController,
    private companyController:CompanyController
    ){
    
    this.customer = new Customer();
    this.company = new Company();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });

    this.customerForm = fb.group({
      username:this.customerUsername,
      password:this.customerPassword,
      confirmationPassword: this.customerConfirmedPassword,
      email: this.customerEmail
    })

    this.customerForm.valueChanges
    .pipe(filter(data=>this.customerForm.valid&&data.password==data.confirmationPassword))
    .subscribe(data=>{this.customer.username=data.username;this.customer.email=data.email;this.customer.password=data.password;});

    this.companyForm = fb.group({
      companyPIB:this.companyPIB,
      companyUsername:this.companyUsername,
      companyEmail: this.companyEmail,
      companyPassword: this.companyPassword,
      companyConfirmedPassword: this.companyConfirmedPassword
    });

    this.companyForm.valueChanges
    .pipe(filter(data=>this.companyForm.valid&&data.companyPassword==data.companyConfirmedPassword))
    .subscribe(data=>{console.log(data);this.company.PIB=data.companyPIB;this.company.email=data.companyEmail;this.company.name=data.companyUsername;this.company.password=data.companyPassword});
  }

  ngAfterViewInit(): void {
    this.signUpButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.add("right-panel-active");
    });
    this.signInButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.remove("right-panel-active");
    });
  }
  ngOnInit(): void {
    
  }
  backToPrevoiusPage(){
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
  public saveCustomer():void{
    this.customerController.createCustomer(this.customer.username,this.customer.email,this.customer.password)
    .subscribe((res:ICustomer)=>this.customerController.registeredCustomer=res,(error)=>{alert(error.error.detail)});
  }
  public saveCompany():void{
    this.companyController.createCompany(this.company.PIB,this.company.name,this.company.email,this.company.password)
    .subscribe((res)=>{
      alert("Company is successfuly registered.");
      this.companyController.registeredCompany=this.company;
    },(error)=>alert(error.error.detail));
  }
}
