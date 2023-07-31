import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewOfferRoutingModule } from './create-new-offer-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductCardComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    CreateNewOfferRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ProductCardComponent]
})
export class CreateNewOfferModule { }
