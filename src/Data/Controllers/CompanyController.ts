import { Observable } from "rxjs";
import Company from "../Classes/Company";
import {Injectable} from '@angular/core'
import CompanyService from "../Services/Company.service";
import ICompany from "../Interfaces/ICompany";

@Injectable({providedIn:"root"})
export default class CompanyController{
    private _registeredCompany: ICompany;
    public get registeredCompany():ICompany {
        return this._registeredCompany;
    }
    public set registeredCompany(value: ICompany) {
        this._registeredCompany = value;
    }
    constructor(private companyService:CompanyService){
        this._registeredCompany = new Company();
        // this._registeredCompany.PIB=10000005n;
        // this._registeredCompany.email="company5@gmail.com";
        // this._registeredCompany.name="company5";
        // this._registeredCompany.password="company5";
    }

    public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
        return this.companyService.createCompany(PIB,name,email,password);
    }
    public deleteCompany(company:ICompany):Observable<ICompany>{
        return this.companyService.deleteCompany(company);
    }
}