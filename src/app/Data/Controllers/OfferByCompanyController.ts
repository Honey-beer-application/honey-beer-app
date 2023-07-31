import {Injectable, Optional, SkipSelf} from "@angular/core"
import OfferByCompanyService from "../Services/OfferByCompany.service";
import ICompany from "../Interfaces/ICompany";
import IOfferByCompany from "../Interfaces/IOfferByCompany";
import { BehaviorSubject, Observable } from "rxjs";
import OfferByCompany from "../Classes/OfferByCompany";


@Injectable({providedIn:"root"})
export class OfferByCompanyController{
    private offerByCompanyToLoadObject: IOfferByCompany;
    private _offerBycompanyToLoad: BehaviorSubject<IOfferByCompany>;
    private _offerByCompanyToLoadObservable: Observable<IOfferByCompany> ;
    public get offerByCompanyToLoadObservable():Observable<IOfferByCompany> {
        return this._offerByCompanyToLoadObservable;
    }
     public setOfferByCompanyToLoad(data:IOfferByCompany){
        this._offerBycompanyToLoad.next(data);
     }
    constructor(private offerByCompanyService:OfferByCompanyService,@Optional() @SkipSelf() parent?:OfferByCompanyController){
        if (parent) {
            throw Error(
                `[GuardedSingletonService]: trying to create multiple instances,
                but this service should be a singleton.`
            );
        }
        this.offerByCompanyToLoadObject= new OfferByCompany();
        this._offerBycompanyToLoad = new BehaviorSubject(this.offerByCompanyToLoadObject);
        this._offerByCompanyToLoadObservable = this._offerBycompanyToLoad.asObservable();
    }
    public loadAllOffersByCompany(company:ICompany):Observable<IOfferByCompany[]>{
        return this.offerByCompanyService.loadAllOffersByCompany(company);
    }
    public getOfferByCompany(id:number):Observable<OfferByCompany>{
        return this.offerByCompanyService.getOfferByCompany(id);
    }
    public changeOfferByCompany(offerByCompany:IOfferByCompany):Observable<boolean>{
        return this.offerByCompanyService.changeOfferByCompany(offerByCompany);
    }
    public saveOfferByCompany(offerByCompany:IOfferByCompany):Observable<boolean>{
        return this.offerByCompanyService.saveOfferByCompany(offerByCompany);
    }
}