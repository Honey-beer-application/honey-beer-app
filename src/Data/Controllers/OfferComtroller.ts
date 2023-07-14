import { Observable } from "rxjs";
import OfferService from "../Services/Offer.service";
import { Product } from "../Classes/Product";
import {Injectable} from "@angular/core"
@Injectable({providedIn:"root"})
export default class OfferController{

    constructor(private offerService:OfferService){

    }
    public loadAllOffers():Observable<Product[]>{
        return this.offerService.loadAllOffers();
    }
}