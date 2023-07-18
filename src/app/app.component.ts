import { Component, OnInit } from '@angular/core';
import { OfferByCompanyController } from './Data/Controllers/OfferByCompanyController';
import IOfferByCompany from './Data/Interfaces/IOfferByCompany';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(public offerByCompanyController:OfferByCompanyController){

  }
}
