import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SentCompanyEmail } from "../Classes/SentCompanyEmail";
import { Observable } from "rxjs";
import { ISentCompanyEmail } from "../Interfaces/ISentCompanyEmail";

@Injectable({providedIn:"root"})
export class SentCompanyEmailService{
    constructor(private httpClient:HttpClient){

    }
    public saveSentComapnyEmail(sentCompanyEmail:ISentCompanyEmail):Observable<boolean>{
        return this.httpClient.post<boolean>("https://localhost:7165/api/SentCompanyEmail",{
            "pib":Number(sentCompanyEmail.pib),
            "dateAndTime":sentCompanyEmail.dateAndTime
        });
    }
}