import { Component } from '@angular/core';
import Offer from 'src/Data/Classes/Offer';
import { Product } from 'src/Data/Classes/Product';
import OfferController from 'src/Data/Controllers/OfferComtroller';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {

  public products!:Product[];
  constructor(private offerController:OfferController){
    this.offerController.loadAllOffers().subscribe(
      (data:Product[])=>{this.products=data},
      (error)=>alert(error.error.detail)
    )
  }
}
