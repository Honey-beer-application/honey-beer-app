import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Offer from 'src/app/Data/Classes/Offer';
import OfferController from 'src/app/Data/Controllers/OfferController';
import IOffer from 'src/app/Data/Interfaces/IOffer';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {

  @Input('offer') offer:IOffer = new Offer();
  constructor(private readonly router:Router,private readonly offerController:OfferController){

  }
  public redirectToPersonalOffer(offer:IOffer):void{
    this.router.navigateByUrl(`app/offers/${offer.offerId}/create`);
    this.offerController.setOffer(offer);
  }
  public convertDate(date:Date):string{
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  }
}
