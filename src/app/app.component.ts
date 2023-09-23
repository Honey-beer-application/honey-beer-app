import { Component } from '@angular/core';
import { OfferByCompanyController } from './Data/Controllers/OfferByCompanyController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public title:string = 'honey-beer-app';
  
  constructor(public offerByCompanyController:OfferByCompanyController){

  }
}
