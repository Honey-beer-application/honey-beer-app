import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './reservations.component';
import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
