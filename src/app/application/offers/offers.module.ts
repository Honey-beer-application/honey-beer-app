import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OfferCardComponent } from './offer-card/offer-card.component';



@NgModule({
  declarations: [
    OffersComponent,
    OfferCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
