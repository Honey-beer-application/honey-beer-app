import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import Company from "../Classes/Company";
import { Observable } from "rxjs";
import ICompany from "../Interfaces/ICompany";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export default class CompanyService{

    constructor(private readonly httpClient:HttpClient){
    }

    public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
        return this.httpClient.post<Company>(environment.apiUrl+"/api/Company",
        {
            "pib":PIB,
            "name":name,
            "email":email,
            "password":password
        });
    }
    deleteCompany(company: ICompany): Observable<ICompany> {
        return this.httpClient.delete<ICompany>(environment.apiUrl+"/api/company",{body:{
            "pib":Number(company.PIB),
            "name":company.email,
            "email":company.name,
            "password":company.password
        }});
    }
    // public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
    //     return this.httpClient.post<Company>("https://honeybeer.bsite.net/api/Company",
    //     {
    //         "pib":PIB,
    //         "name":name,
    //         "email":email,
    //         "password":password
    //     });
    // }
    // deleteCompany(company: ICompany): Observable<ICompany> {
    //     return this.httpClient.delete<ICompany>("https://honeybeer.bsite.net/api/company",{body:{
    //         "pib":Number(company.PIB),
    //         "name":company.email,
    //         "email":company.name,
    //         "password":company.password
    //     }});
    // }
}