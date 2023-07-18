import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import ICompany from "../Interfaces/ICompany";
import IOfferByCompany from "../Interfaces/IOfferByCompany";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export default class OfferByCompanyService{

    constructor(private httpClient:HttpClient){

    }
    public loadAllOffersByCompany(company:ICompany):Observable<IOfferByCompany[]>{
        return this.httpClient.post<IOfferByCompany[]>("https://localhost:7165/api/offerByCompany/get",
            {
            "pib":Number(company.PIB),
            "name":company.name,
            "email":company.email,
            "password":company.password
            }
        );
    }
}