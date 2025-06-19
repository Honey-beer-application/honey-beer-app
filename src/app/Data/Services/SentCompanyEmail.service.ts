import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ISentCompanyEmail } from "../Interfaces/ISentCompanyEmail";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class SentCompanyEmailService{
    constructor(private readonly httpClient:HttpClient){

    }
    public saveSentComapnyEmail(sentCompanyEmail:ISentCompanyEmail):Observable<boolean>{
        return this.httpClient.post<boolean>(environment.apiUrl+"/api/SentCompanyEmail",{
            "pib":Number(sentCompanyEmail.pib),
            "dateAndTime":sentCompanyEmail.dateAndTime
        });
    }
    // public saveSentComapnyEmail(sentCompanyEmail:ISentCompanyEmail):Observable<boolean>{
    //     return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/SentCompanyEmail",{
    //         "pib":Number(sentCompanyEmail.pib),
    //         "dateAndTime":sentCompanyEmail.dateAndTime
    //     });
    // }
}