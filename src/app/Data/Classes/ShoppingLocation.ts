import ICompany from "../Interfaces/ICompany";
import IProduct from "../Interfaces/IProduct";
import { IShoppingLocation } from "../Interfaces/IShoppingLocation";
import Company from "./Company";

export class ShoppingLocation implements IShoppingLocation{
    private _pib: bigint;
    private _shoppingLocationId: bigint;
    private _location: string;
    private _companyInstance: ICompany;
    private _products: IProduct[];
    public get pib(): bigint {
        return this._pib;
    }
    public set pib(value: bigint) {
        this._pib = value;
    }
    public get shoppingLocationId(): bigint {
        return this._shoppingLocationId;
    }
    public set shoppingLocationId(value: bigint) {
        this._shoppingLocationId = value;
    }
    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }
    public get companyInstance(): ICompany {
        return this._companyInstance;
    }
    public set companyInstance(value: ICompany) {
        this._companyInstance = value;
    }
    public get productsInLocation(): IProduct[] {
        return this._products;
    }
    public set productsInLocation(value: IProduct[]) {
        this._products = value;
    }
    constructor(){
        this._pib=0n;
        this._shoppingLocationId=0n;
        this._location="";
        this._companyInstance = new Company();
        this._products=new Array<IProduct>();
    }
}