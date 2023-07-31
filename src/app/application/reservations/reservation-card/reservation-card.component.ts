import { Component, Input } from '@angular/core';
import Reservation from 'src/app/Data/Classes/Reservation';
import IReservation from 'src/app/Data/Interfaces/IReservation';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent {
  @Input('reservation') reservation:IReservation;
  constructor(){
    this.reservation = new Reservation();
  }
  public convertDate(date:Date):string{
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  }
}
