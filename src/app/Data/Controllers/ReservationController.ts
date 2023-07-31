import {Injectable} from "@angular/core"
import { ReservationService } from "../Services/Reservation.service";
import { Observable,BehaviorSubject } from "rxjs";
import IProduct from "../Interfaces/IProduct";
import { Product } from "../Classes/Product";
import IReservation from "../Interfaces/IReservation";
@Injectable({providedIn:"root"})
export class ReservationController{
    public productBS:BehaviorSubject<IProduct>;
    public productObservable:Observable<IProduct>;
    constructor(private reservationService:ReservationService){
        this.productBS = new BehaviorSubject<IProduct>(<IProduct>(new Product()));
        this.productObservable = this.productBS.asObservable();
    }

    public laodAllReservations():Observable<IReservation[]>{
        return this.reservationService.loadAllReservations();
    }
    public saveReservation(reservation:IReservation):Observable<boolean> {
        return this.reservationService.saveReservation(reservation);
    }
}