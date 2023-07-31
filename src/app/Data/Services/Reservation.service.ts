import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import IReservation from "../Interfaces/IReservation";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ReservationService{

    constructor(private httpClient:HttpClient){

    }
    public loadAllReservations():Observable<IReservation[]>{
        return this.httpClient.get<IReservation[]>("https://localhost:7165/api/reservation/getAllReservations");
    }
    public saveReservation(reservation: IReservation):Observable<boolean> {
        return this.httpClient.post<boolean>("https://localhost:7165/api/reservation/saveReservation",
        {
            "productId": Number(reservation.productId),
            "pib": Number(reservation.pib),
            "amount": reservation.amount,
            "delivery": reservation.delivery
        });
    }
}