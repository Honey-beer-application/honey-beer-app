import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import Reservation from 'src/app/Data/Classes/Reservation';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import IProduct from 'src/app/Data/Interfaces/IProduct';
import IReservation from 'src/app/Data/Interfaces/IReservation';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss']
})
export class NewReservationComponent {

  private subs:Subscription = new Subscription();
  public reservation:IReservation;

  public reservationForm!:FormGroup;
  public reservationAmount:FormControl;
  public reservationDeliveryDate:FormControl;
  constructor(private fb:FormBuilder,private reservationController:ReservationController){
    this.reservation = new Reservation();
    this.subs.add(
      this.reservationController.productObservable.subscribe((data:IProduct)=>{
        this.reservation.productInstance=data;
        this.reservation.productId = data.productId;
      })
    )
    this.reservationAmount = new FormControl(this.reservation.amount,[Validators.required,Validators.min(0)]);
    this.reservationDeliveryDate = new FormControl(this.reservation.delivery.toLocaleDateString(),Validators.required);
    this.reservationForm = this.fb.group({
      amount:this.reservationAmount,
      deliveryDate:this.reservationDeliveryDate,
    });

    this.subs.add(
      CompanyController.companyObservable.subscribe((data:ICompany)=>{
        this.reservation.pib=data.PIB;
      })
    );

    this.subs.add(
      this.reservationForm.valueChanges
      .pipe(filter(data=>this.reservationForm.valid))
      .subscribe((data:{amount:number,deliveryDate:string})=>{
        if(data.amount!=undefined&&data.amount>0)
          this.reservation.amount=data.amount;
        if(data.deliveryDate!=undefined&&data.deliveryDate!=null&&data.deliveryDate!='')
          this.reservation.delivery = new Date(data.deliveryDate);
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public saveOfferByComapny(){
    this.subs.add(
      this.reservationController.saveReservation(this.reservation).subscribe(
        (data)=>alert("Reservation is successfully saved."),
        (error)=>alert(error))
    )
  }
  public convertDate(date:Date):string{
    let month:number = date.getMonth()+1;
    let day:number = date.getDate();
    return date.getFullYear()+"-"+(month<10?'0'+month:month)+"-"+(day<10?'0'+day:day);
  }
}
