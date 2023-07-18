import ICompany from "../Interfaces/ICompany";
import IOffer from "../Interfaces/IOffer";
import IOfferByCompany from "../Interfaces/IOfferByCompany";
import Company from "./Company";
import Offer from "./Offer";

export default class OfferByCompany implements IOfferByCompany{
    private _pib: bigint;
    private _productId: bigint;
    private _offerId: bigint;
    private _companyInstance: ICompany;
    private _offerInstance: IOffer;

    public get pib(): bigint {
        return this._pib;
    }
    public set pib(value: bigint) {
        this._pib = value;
    }
    public get productId(): bigint {
        return this._productId;
    }
    public set productId(value: bigint) {
        this._productId = value;
    }
    public get offerId(): bigint {
        return this._offerId;
    }
    public set offerId(value: bigint) {
        this._offerId = value;
    }
    public get companyInstance(): ICompany {
        return this._companyInstance;
    }
    public set companyInstance(value: ICompany) {
        this._companyInstance = value;
    }
    public get offerInstance(): IOffer {
        return this._offerInstance;
    }
    public set offerInstance(value: IOffer) {
        this._offerInstance = value;
    }
    constructor(){
        this._pib=0n;
        this._productId=0n;
        this._offerId=0n;
        this._companyInstance=new Company();
        this._offerInstance=new Offer();
    }
    
}