import { Component } from '@angular/core';
import Company from './../../../Data/Classes/Company';
import CompanyController from './../../../Data/Controllers/CompanyController';
import CustomerController from './../../../Data/Controllers/CustomerConstroller';
import ICompany from './../../../Data/Interfaces/ICompany';
import ICustomer from './../../../Data/Interfaces/ICustomer';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Customer from 'src/app/Data/Classes/Customer';

@Component({
  selector: 'app-navigation-big',
  templateUrl: './navigation-big.component.html',
  styleUrls: ['./navigation-big.component.scss']
})
export class NavigationBigComponent {

  public hoveredImage:string="#";
  public images:string[]=[
    "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  ];
  public customer:ICustomer;
  private subs:Subscription = new Subscription();
  public company!:ICompany;
  constructor(private customerController:CustomerController,
    private companyController:CompanyController,
    private router:Router){
    // this.customer=this.customerController.registeredCustomer;
    this.customer=new Customer();
    this.subs.add(
      this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>this.customer=data)
    )
    this.subs.add(
      CompanyController.companyObservable.subscribe((data:ICompany)=>this.company=data)
    )
  }
  public isCustomerRegistered():boolean{
    return this.customer.customerId!=0n;
  }
  public isCompanyRegistered():boolean{
    return this.company.PIB!=0n;
  }
  public deleteAccount(){
    this.companyController.deleteCompany(this.company).subscribe(
      (data)=>{alert("Account has been successfuly deleted.");this.companyController.setCompany(new Company())},
      (error)=>alert(JSON.stringify(error))
    )
  }
  public deleteCustomerAccount(){
    this.customerController.deleteCustomer(this.customer)
    .subscribe(
      (data)=>{
        alert("Personal account was successfuly deleted.");
        this.customerController.registeredCustomer.next(new Customer());
      },
      (error)=>alert(error.error.detail)
    );
  }
  public redirectToMainPage():void{
    this.router.navigateByUrl("app");
  }
  public redirectToProducts():void{
    this.router.navigateByUrl("app/products");
  }
  public navigateToScanner():void{
    this.router.navigateByUrl("app/scanner");
  }
  public navigateToOffers():void{
    this.router.navigateByUrl("app/offers");
  }
  public navigateToPersonalOffers():void{
    this.router.navigateByUrl("app/personal_offers");
  }
  public redirectToLogin():void{
    this.router.navigateByUrl("login");
  }
  public redirectToRegister():void{
    this.router.navigateByUrl("register");
  }
  public navigateToCreateOffer():void{
    this.router.navigateByUrl("app/new_offer")
  }
  public navigateToReservations():void{
    this.router.navigateByUrl("app/reservations");
  }
  public navigateToCreateReservation():void{
    this.router.navigateByUrl("app/create-reservation");
  }
  public redirectToProductStores():void{
    this.router.navigateByUrl("app/product-stores");
  }
  public redirectToOurStores():void{
    this.router.navigateByUrl('app/our-stores');
  }
  public setImage(value:string):void{
    this.hoveredImage=value;
  }
  public redirectToDiscounts():void{
    this.router.navigateByUrl('app/discounts');
  }
  public redirectToSurveys():void{
    this.router.navigateByUrl('app/surveys');
  }
  public redirectToPromotions():void{
    this.router.navigateByUrl('app/promotions');
  }
  public redirectToMeetings():void{
    this.router.navigateByUrl('app/meetings');
  }
  public redirectToAccount():void{
    this.router.navigateByUrl('app/account');
  }
  public redirectToVotingForms():void{
    this.router.navigateByUrl("app/voting-forms");
  }
}
