import { Component } from '@angular/core';
import { Product } from './../../Data/Classes/Product';
import OfferController from './../../Data/Controllers/OfferComtroller';

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
