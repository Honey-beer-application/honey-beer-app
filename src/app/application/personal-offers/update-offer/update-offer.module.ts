import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateOfferComponent } from './update-offer.component';
import { UpdateOfferRoutingModule } from './update-offer-routing.module';
import { OfferByCompanyControllerModule } from 'src/app/Data/Controllers/OfferByCompanyController.module';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';



@NgModule({
  declarations: [UpdateOfferComponent],
  imports: [
    CommonModule,
    UpdateOfferRoutingModule,
    OfferByCompanyControllerModule
  ]
})
export class UpdateOfferModule { }
