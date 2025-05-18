import { BehaviorSubject, Observable } from "rxjs";
import OfferService from "../Services/Offer.service";
import {Injectable} from "@angular/core"
import Offer from "../Classes/Offer";
import IOffer from "../Interfaces/IOffer";
import IOfferByCompany from "../Interfaces/IOfferByCompany";
@Injectable({providedIn:"root"})
export default class OfferController{
    

    private static readonly offerToLoad:BehaviorSubject<IOffer> = new BehaviorSubject<IOffer>(<IOffer>(new Offer));
    public static get offerToLoadObservable(): Observable<IOffer> {
        return OfferController.offerToLoad.asObservable();
    }
    public setOffer(offer:IOffer){
        OfferController.offerToLoad.next(offer);
    }
    constructor(private readonly offerService:OfferService){

    }
    public loadAllOffers():Observable<Offer[]>{
        return this.offerService.loadAllOffers();
    }
    public saveOffer(offerByCompany: IOfferByCompany):Observable<boolean> {
        return this.offerService.saveOffer(offerByCompany);
    }
}