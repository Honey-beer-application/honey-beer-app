import { Observable, BehaviorSubject } from "rxjs";
import Company from "../Classes/Company";
import {Injectable} from '@angular/core'
import CompanyService from "../Services/Company.service";
import ICompany from "../Interfaces/ICompany";

@Injectable({providedIn:"root"})
export default class CompanyController{
    private readonly _registeredCompany:ICompany = new Company().setPIB(10000001n).setEmail("kompanija1@gmail.com").setName("kompanija1").setPassword("kompanija1");
    private readonly _companyBehaviour:BehaviorSubject<ICompany> = new BehaviorSubject<ICompany>(this._registeredCompany);

    public companyObservable(): Observable<ICompany>{
        return this._companyBehaviour.asObservable();
    }

    public setCompany(value:ICompany){
        this._companyBehaviour.next(value);
    }
    
    constructor(private readonly companyService:CompanyService){
    }

    public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
        return this.companyService.createCompany(PIB,name,email,password);
    }
    public deleteCompany(company:ICompany):Observable<ICompany>{
        return this.companyService.deleteCompany(company);
    }
}