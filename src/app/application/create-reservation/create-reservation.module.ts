import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReservationRoutingModule } from './create-reservation-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewReservationComponent } from './new-reservation/new-reservation.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    NewReservationComponent
  ],
  imports: [
    CommonModule,
    CreateReservationRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ProductCardComponent]
})
export class CreateReservationModule { }
