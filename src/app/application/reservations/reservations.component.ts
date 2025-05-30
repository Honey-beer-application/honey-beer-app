import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import IReservation from 'src/app/Data/Interfaces/IReservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  private readonly subs:Subscription;
  private allReservations:IReservation[];
  public reservations:IReservation[];
  public reservationForm:FormGroup;
  private readonly reservationAmount:FormControl;
  private readonly reservationDalivery:FormControl;
  constructor(private readonly reservationController:ReservationController,private readonly fb:FormBuilder){
    //initializations
    this.subs = new Subscription();
    this.allReservations = new Array<IReservation>();
    this.reservations = new Array<IReservation>();
    this.reservationAmount = new FormControl();
    this.reservationDalivery = new FormControl();
    //initializations from objects
    this.reservationForm = this.fb.group({
      amount:this.reservationAmount,
      delivery:this.reservationDalivery
    })

    this.subs.add(
      this.reservationController.loadAllReservations().subscribe(
        (data:IReservation[])=>{
          this.allReservations=data;
          this.reservations=this.allReservations}
      )
    )

    this.subs.add(
      this.reservationForm.valueChanges.subscribe(
        (data:{amount:number,delivery:string})=>{
          this.reservations = this.allReservations;
          if(data.amount!=undefined&&data.amount!=null)
            this.reservations = this.reservations.filter(reservation=>reservation.amount==data.amount);
          if(data.delivery!=undefined&&data.delivery!=null&&data.delivery!='')
            this.reservations = this.reservations.filter(reservation=>reservation.delivery.toISOString()===(new Date(data.delivery.toString().split('T')[0])).toISOString());
        }
      )
    )
  }
}
