import { Component } from '@angular/core';
import Company from './../../../Data/Classes/Company';
import CompanyController from './../../../Data/Controllers/CompanyController';
import CustomerController from './../../../Data/Controllers/CustomerConstroller';
import ICompany from './../../../Data/Interfaces/ICompany';
import ICustomer from './../../../Data/Interfaces/ICustomer';

@Component({
  selector: 'app-navigation-big',
  templateUrl: './navigation-big.component.html',
  styleUrls: ['./navigation-big.component.scss']
})
export class NavigationBigComponent {

  public customer:ICustomer;
  public company:ICompany;
  constructor(private customerController:CustomerController,private companyController:CompanyController){
    this.customer=this.customerController.registeredCustomer;
    this.company = this.companyController.registeredCompany;
  }
  public isCustomerRegistered():boolean{
    return this.customer.customerId!=0n;
  }
  public isCompanyRegistered():boolean{
    return this.company.PIB!=0n;
  }
  public deleteAccount(){
    this.companyController.deleteCompany(this.companyController.registeredCompany).subscribe(
      (data)=>{alert("Account has been successfuly deleted.");this.companyController.registeredCompany=new Company()},
      (error)=>alert(JSON.stringify(error))
    )
  }
  public deleteCustomerAccount(){
    this.customerController.deleteCustomer(this.customerController.registeredCustomer)
    .subscribe(
      (data)=>alert("Personal account was successfuly deleted."),
      (error)=>alert(error.error.detail)
    );
  }
}
