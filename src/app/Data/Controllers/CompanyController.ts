import { Observable } from "rxjs";
import Company from "../Classes/Company";
import {Injectable} from '@angular/core'
import CompanyService from "../Services/Company.service";
import ICompany from "../Interfaces/ICompany";
import {BehaviorSubject} from "rxjs"

@Injectable({providedIn:"root"})
export default class CompanyController{
    private _registeredCompany:ICompany = new Company().setPIB(10000001n).setEmail("kompanija1@gmail.com").setName("kompanija1").setPassword("kompanija1");
    private _companyBehaviour:BehaviorSubject<ICompany> = new BehaviorSubject<ICompany>(this._registeredCompany);
    public get companyObservable(): Observable<ICompany> {
        return this._companyBehaviour.asObservable();
    }
    public setCompany(company:ICompany){
        this._companyBehaviour.next(company);
    }
    constructor(private companyService:CompanyService){
    }

    public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
        return this.companyService.createCompany(PIB,name,email,password);
    }
    public deleteCompany(company:ICompany):Observable<ICompany>{
        return this.companyService.deleteCompany(company);
    }
}