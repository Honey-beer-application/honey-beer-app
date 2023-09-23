import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Offer from "../Classes/Offer";
import {Injectable} from "@angular/core"
import IOffer from "../Interfaces/IOffer";
import IOfferByCompany from "../Interfaces/IOfferByCompany";

@Injectable({providedIn:"root"})
export default class OfferService{
    
    constructor(private httpClient:HttpClient){

    }
    // public loadAllOffers():Observable<Offer[]>{
    //     return this.httpClient.get<Offer[]>("https://localhost:7165/api/offer");
    // }
    // public saveOffer(offerByCompany: IOfferByCompany): Observable<boolean> {
    //     return this.httpClient.post<boolean>("https://localhost:7165/api/offer",
    //     {
    //         "pib":Number(offerByCompany.pib),
    //         "productId":Number(offerByCompany.productId),
    //         "offerId":Number(offerByCompany.offerId),
    //         "offerInstance":
    //         {
    //             "offerId":Number(offerByCompany.offerInstance.offerId),
    //             "productId":Number(offerByCompany.offerInstance.productInstance?.productId),
    //             "amount":offerByCompany.offerInstance.amount,
    //             "beginDate":offerByCompany.offerInstance.beginDate,
    //             "endDate":offerByCompany.offerInstance.endDate
    //         }
    //     });
    // }
    public loadAllOffers():Observable<Offer[]>{
        return this.httpClient.get<Offer[]>("https://honeybeer.bsite.net/api/offer");
    }
    public saveOffer(offerByCompany: IOfferByCompany): Observable<boolean> {
        return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/offer",
        {
            "pib":Number(offerByCompany.pib),
            "productId":Number(offerByCompany.productId),
            "offerId":Number(offerByCompany.offerId),
            "offerInstance":
            {
                "offerId":Number(offerByCompany.offerInstance.offerId),
                "productId":Number(offerByCompany.offerInstance.productInstance?.productId),
                "amount":offerByCompany.offerInstance.amount,
                "beginDate":offerByCompany.offerInstance.beginDate,
                "endDate":offerByCompany.offerInstance.endDate
            }
        });
    }
}