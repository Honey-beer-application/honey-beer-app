import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Company from 'src/app/Data/Classes/Company';
import Customer from 'src/app/Data/Classes/Customer';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';

@Component({
  selector: 'app-navigation-small',
  templateUrl: './navigation-small.component.html',
  styleUrls: ['./navigation-small.component.scss']
})
export class NavigationSmallComponent {

  private readonly subs:Subscription;
  private customer:ICustomer;
  private company:ICompany;
  constructor(private readonly router:Router,private readonly customerController:CustomerController, private readonly companyController:CompanyController){
    this.subs = new Subscription();
    this.customer = new Customer();
    this.company = new Company();
    this.subs.add(
      this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>this.customer=data)
    )
    this.subs.add(
      this.companyController.companyObservable.subscribe((data:ICompany)=>this.company=data)
    )
  }
  public isCustomerRegistered():boolean{
    return this.customer.customerId!=0n;
  }
  public isCompanyRegistered():boolean{
    return this.company.PIB!=0n;
  }
  public redirectTo(route: string):void{
    this.router.navigateByUrl(route)
  }
}
