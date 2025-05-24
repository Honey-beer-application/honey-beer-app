import {Injectable} from "@angular/core"
import { EmailService } from "../Services/Email.service";
import { IEmail } from "../Interfaces/IEmail";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class EmailController{
    constructor( private readonly emailService:EmailService){

    }
    public saveEmail(email:IEmail):Observable<boolean>{
        return this.emailService.saveEmail(email);
    }
}