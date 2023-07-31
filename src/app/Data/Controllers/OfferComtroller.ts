import { BehaviorSubject, Observable } from "rxjs";
import OfferService from "../Services/Offer.service";
import {Injectable} from "@angular/core"
import Offer from "../Classes/Offer";
import IOffer from "../Interfaces/IOffer";
@Injectable({providedIn:"root"})
export default class OfferController{
    

    private static offerToLoad:BehaviorSubject<IOffer> = new BehaviorSubject<IOffer>(<IOffer>(new Offer));
    private static _offerToLoadObservable: Observable<IOffer> = OfferController.offerToLoad.asObservable();
    public static get offerToLoadObservable(): Observable<IOffer> {
        return OfferController._offerToLoadObservable;
    }
    public setOffer(offer:IOffer){
        OfferController.offerToLoad.next(offer);
    }
    constructor(private offerService:OfferService){

    }
    public loadAllOffers():Observable<Offer[]>{
        return this.offerService.loadAllOffers();
    }
    public saveOffer(offer: IOffer):Observable<boolean> {
        return this.offerService.saveOffer(offer);
    }
}