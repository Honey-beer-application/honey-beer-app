import { Observable } from "rxjs";
import Company from "../Classes/Company";
import {Injectable} from '@angular/core'
import CompanyService from "../Services/Company.service";
import ICompany from "../Interfaces/ICompany";
import {BehaviorSubject} from "rxjs"

@Injectable({providedIn:"root"})
export default class CompanyController{
    private static _registeredCompany:ICompany;
    private static companyBehaviour:BehaviorSubject<ICompany> ;
    private static _companyObservable: Observable<ICompany>;
    public static get companyObservable(): Observable<ICompany> {
        return CompanyController._companyObservable;
    }
    public setCompany(company:ICompany){
        CompanyController.companyBehaviour.next(company);
    }
    constructor(private companyService:CompanyService){
         CompanyController._registeredCompany = new Company();
        // CompanyController._registeredCompany.PIB=10000001n;
        // CompanyController._registeredCompany.email="kompanija1@gmail.com";
        // CompanyController._registeredCompany.name="kompanija1";
        // CompanyController._registeredCompany.password="kompanija1";
        CompanyController.companyBehaviour = new BehaviorSubject<ICompany>(CompanyController._registeredCompany);
        CompanyController._companyObservable = CompanyController.companyBehaviour.asObservable();
    }

    public createCompany(PIB:bigint,name:string,email:string,password:string):Observable<ICompany>{
        return this.companyService.createCompany(PIB,name,email,password);
    }
    public deleteCompany(company:ICompany):Observable<ICompany>{
        return this.companyService.deleteCompany(company);
    }
}