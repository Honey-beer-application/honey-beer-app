import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalOffersContentComponent } from './personal-offers-content/personal-offers-content.component';
import { PersonalOffersRoutingModule } from './personal-offers-routing.module';



@NgModule({
  declarations: [
    PersonalOffersContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonalOffersRoutingModule
  ]
})
export class PersonalOffersModule {

}
