import { ApplicationRef, Component, OnInit } from '@angular/core';
import {OfferByCompanyController} from './../../../Data/Controllers/OfferByCompanyController';
import IOfferByCompany from 'src/app/Data/Interfaces/IOfferByCompany';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent implements OnInit{

  constructor(public offerByCompanyController:OfferByCompanyController){
  }
  ngOnInit(): void {
    this.offerByCompanyController.offerByCompanyToLoadObservable.subscribe((data:IOfferByCompany)=>console.log(data));
  }
}
