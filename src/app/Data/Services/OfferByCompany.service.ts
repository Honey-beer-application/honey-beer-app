import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import ICompany from "../Interfaces/ICompany";
import IOfferByCompany from "../Interfaces/IOfferByCompany";
import { Observable } from "rxjs";
import OfferByCompany from "../Classes/OfferByCompany";

@Injectable({providedIn:"root"})
export default class OfferByCompanyService{
    
    constructor(private httpClient:HttpClient){

    }
    // public loadAllOffersByCompany(company:ICompany):Observable<IOfferByCompany[]>{
    //     return this.httpClient.post<IOfferByCompany[]>("https://localhost:7165/api/offerByCompany/get",
    //         {
    //         "pib":Number(company.PIB),
    //         "name":company.name,
    //         "email":company.email,
    //         "password":company.password
    //         }
    //     );
    // }
    // public getOfferByCompany(id:number):Observable<OfferByCompany>{
    //     return this.httpClient.get<OfferByCompany>(`https://localhost:7165/api/OfferByCompany/getOfferByCompany/:id?id=${id}`);
    // }
    // public changeOfferByCompany(offerByCompany:IOfferByCompany):Observable<boolean>{
    //     var object:Object = {
    //         "pib": Number(offerByCompany.pib),
    //         "productId": Number(offerByCompany.offerId),
    //         "offerId": Number(offerByCompany.productId),
    //         "companyInstance": {
    //             "pib":Number(offerByCompany.companyInstance.PIB),
    //             "name":offerByCompany.companyInstance.name,
    //             "email":offerByCompany.companyInstance.email,
    //             "password":offerByCompany.companyInstance.password
    //         },
    //         "offerInstance": {
    //             "productId": Number(offerByCompany.offerInstance.productId),
    //             "offerId": Number(offerByCompany.offerInstance.offerId),
    //             "amount": offerByCompany.offerInstance.amount,
    //             "beginDate": offerByCompany.offerInstance.beginDate.toISOString().split('.')[0],
    //             "endDate": offerByCompany.offerInstance.endDate.toISOString().split('.')[0],
    //             "productInstance": {
    //                 "productId": Number(offerByCompany.offerInstance.productInstance?.productId),
    //                 "name": offerByCompany.offerInstance.productInstance?.name,
    //                 "description": offerByCompany.offerInstance.productInstance?.description
    //             }
    //         }
    //     };
    //     return this.httpClient.post<boolean>("https://localhost:7165/api/OfferByCompany/update",
    //     object);
    // }
    // saveOfferByCompany(offerByCompany: IOfferByCompany): Observable<boolean> {
    //     return this.httpClient.post<boolean>("https://localhost:7165/api/offerByCompany/save",
    //     {
    //         "offerId":Number(offerByCompany.offerId),
    //         "productId":Number(offerByCompany.productId),
    //         "pib":Number(offerByCompany.pib),
    //         "offerInstance":{
    //             "offerId":Number(offerByCompany.offerInstance.offerId),
    //             "productId":Number(offerByCompany.offerInstance.productId),
    //             "amount":offerByCompany.offerInstance.amount,
    //             "beginDate":offerByCompany.offerInstance.beginDate,
    //             "endDate":offerByCompany.offerInstance.endDate
    //         }
    //     }
    //     );
    // }
    public loadAllOffersByCompany(company:ICompany):Observable<IOfferByCompany[]>{
        return this.httpClient.post<IOfferByCompany[]>("https://honeybeer.bsite.net/api/offerByCompany/get",
            {
            "pib":Number(company.PIB),
            "name":company.name,
            "email":company.email,
            "password":company.password
            }
        );
    }
    public getOfferByCompany(id:number):Observable<OfferByCompany>{
        return this.httpClient.get<OfferByCompany>(`https://honeybeer.bsite.net/api/OfferByCompany/getOfferByCompany/:id?id=${id}`);
    }
    public changeOfferByCompany(offerByCompany:IOfferByCompany):Observable<boolean>{
        var object:Object = {
            "pib": Number(offerByCompany.pib),
            "productId": Number(offerByCompany.offerId),
            "offerId": Number(offerByCompany.productId),
            "companyInstance": {
                "pib":Number(offerByCompany.companyInstance.PIB),
                "name":offerByCompany.companyInstance.name,
                "email":offerByCompany.companyInstance.email,
                "password":offerByCompany.companyInstance.password
            },
            "offerInstance": {
                "productId": Number(offerByCompany.offerInstance.productId),
                "offerId": Number(offerByCompany.offerInstance.offerId),
                "amount": offerByCompany.offerInstance.amount,
                "beginDate": offerByCompany.offerInstance.beginDate.toISOString().split('.')[0],
                "endDate": offerByCompany.offerInstance.endDate.toISOString().split('.')[0],
                "productInstance": {
                    "productId": Number(offerByCompany.offerInstance.productInstance?.productId),
                    "name": offerByCompany.offerInstance.productInstance?.name,
                    "description": offerByCompany.offerInstance.productInstance?.description
                }
            }
        };
        return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/OfferByCompany/update",
        object);
    }
    saveOfferByCompany(offerByCompany: IOfferByCompany): Observable<boolean> {
        return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/offerByCompany/save",
        {
            "offerId":Number(offerByCompany.offerId),
            "productId":Number(offerByCompany.productId),
            "pib":Number(offerByCompany.pib),
            "offerInstance":{
                "offerId":Number(offerByCompany.offerInstance.offerId),
                "productId":Number(offerByCompany.offerInstance.productId),
                "amount":offerByCompany.offerInstance.amount,
                "beginDate":offerByCompany.offerInstance.beginDate,
                "endDate":offerByCompany.offerInstance.endDate
            }
        }
        );
    }
}