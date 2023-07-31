import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import OfferController from 'src/app/Data/Controllers/OfferComtroller';
import IOffer from 'src/app/Data/Interfaces/IOffer';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {

  @Input('offer') offer!:IOffer;
  constructor(private router:Router,private offerController:OfferController){

  }
  public redirectToPersonalOffer(offer:IOffer):void{
    this.router.navigateByUrl(`app/offers/${offer.offerId}/create`);
    this.offerController.setOffer(offer);
  }
  public convertDate(date:Date):string{
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  }
}
