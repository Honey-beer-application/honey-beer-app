import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateOfferComponent } from './update-offer.component';
import { UpdateOfferRoutingModule } from './update-offer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UpdateOfferComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UpdateOfferRoutingModule
  ]
})
export class UpdateOfferModule { }
