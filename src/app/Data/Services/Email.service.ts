import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { IEmail } from "../Interfaces/IEmail";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class EmailService{
    constructor(private httpClient:HttpClient){

    }
    public saveEmail(email:IEmail):Observable<boolean>{
        return this.httpClient.post<boolean>("https://localhost:7165/api/PersonalEmail",
        {
            "email": email.email,
            "sentPersonalEmailId": 0,
            "dateAndTime": email.dateAndTime,
            "personalEmailInstance": {
                "email": email.email
            }
        }
        );
    }
}