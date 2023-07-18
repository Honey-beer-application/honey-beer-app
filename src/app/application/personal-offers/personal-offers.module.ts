import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalOffersContentComponent } from './personal-offers-content/personal-offers-content.component';
import { PersonalOffersRoutingModule } from './personal-offers-routing.module';
import { OfferByCompanyControllerModule } from 'src/app/Data/Controllers/OfferByCompanyController.module';



@NgModule({
  declarations: [
    PersonalOffersContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonalOffersRoutingModule,
    OfferByCompanyControllerModule
  ]
})
export class PersonalOffersModule {

}
