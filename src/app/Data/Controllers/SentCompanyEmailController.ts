import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SentCompanyEmailService } from "../Services/SentCompanyEmail.service";
import { ISentCompanyEmail } from "../Interfaces/ISentCompanyEmail";

@Injectable({providedIn:"root"})
export class SentCompanyEmailController{
    constructor(private readonly sentCompanyEmailService:SentCompanyEmailService){

    }
    public saveCompanyEmail(sentCompanyEmail:ISentCompanyEmail):Observable<boolean>{
        return this.sentCompanyEmailService.saveSentComapnyEmail(sentCompanyEmail);
    }
}