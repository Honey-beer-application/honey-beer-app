import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { OffersRoutingModule } from './offers-routing.module';



@NgModule({
  declarations: [
    OffersComponent,
    OfferCardComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class OffersModule { }
