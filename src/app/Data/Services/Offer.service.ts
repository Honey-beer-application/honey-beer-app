import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import Offer from "../Classes/Offer";
import { Product } from "../Classes/Product";
import {Injectable} from "@angular/core"

@Injectable({providedIn:"root"})
export default class OfferService{
    constructor(private httpClient:HttpClient){

    }
    public loadAllOffers():Observable<Product[]>{
        return this.httpClient.get<Product[]>("https://localhost:7165/api/offer");
    }
}