import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-medium',
  templateUrl: './navigation-medium.component.html',
  styleUrls: ['./navigation-medium.component.scss']
})
export class NavigationMediumComponent {

  public images:string[]=[
    "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  ];
  public hoveredImage:string="#";
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
  public setImage(value:string):void{
    this.hoveredImage=value;
  }
  public redirectToDiscounts():void{
    this.router.navigateByUrl('app/discounts');
  }
  public redirectToSurveys():void{
    this.router.navigateByUrl('app/surveys');
  }
}
