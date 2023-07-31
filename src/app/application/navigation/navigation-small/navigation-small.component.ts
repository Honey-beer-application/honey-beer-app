import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-small',
  templateUrl: './navigation-small.component.html',
  styleUrls: ['./navigation-small.component.scss']
})
export class NavigationSmallComponent {

  constructor(private router:Router){

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
}
