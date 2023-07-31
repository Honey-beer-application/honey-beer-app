import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { OffersRoutingModule } from './offers-routing.module';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OffersComponent,
    OfferCardComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    ReactiveFormsModule
  ]
})
export class OffersModule { }
