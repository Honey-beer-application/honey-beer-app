import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Offer from "../Classes/Offer";
import {Injectable} from "@angular/core"
import IOffer from "../Interfaces/IOffer";

@Injectable({providedIn:"root"})
export default class OfferService{
    
    constructor(private httpClient:HttpClient){

    }
    public loadAllOffers():Observable<Offer[]>{
        return this.httpClient.get<Offer[]>("https://localhost:7165/api/offer");
    }
    public saveOffer(offer: IOffer): Observable<boolean> {
        return this.httpClient.post<boolean>("https://localhost:7165/api/offer",{
            "offerId":Number(offer.offerId),
            "productId":Number(offer.productInstance?.productId),
            "amount":offer.amount,
            "beginDate":offer.beginDate,
            "endDate":offer.endDate
        });
    }
}