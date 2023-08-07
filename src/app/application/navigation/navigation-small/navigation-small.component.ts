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

  private subs:Subscription;
  private customer:ICustomer;
  private company:ICompany;
  constructor(private router:Router,private customerController:CustomerController){
    this.subs = new Subscription();
    this.customer = new Customer();
    this.company = new Company();
    this.subs.add(
      this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>this.customer=data)
    )
    this.subs.add(
      CompanyController.companyObservable.subscribe((data:ICompany)=>this.company=data)
    )
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
  public isCustomerRegistered():boolean{
    return this.customer.customerId!=0n;
  }
  public isCompanyRegistered():boolean{
    return this.company.PIB!=0n;
  }
  public redirectToAccount():void{
    this.router.navigateByUrl('app/account');
  }
  public redirectToVotingForms():void{
    this.router.navigateByUrl("app/voting-forms");
  }
}
