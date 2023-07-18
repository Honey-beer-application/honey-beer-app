import IOffer from "../Interfaces/IOffer";
import IProduct from "../Interfaces/IProduct";

export default class Offer implements IOffer{
    private _productId: bigint;
    private _offerId: bigint;
    private _amount: number;
    private _beginDate: Date;
    private _endDate: Date;
    private _productInstance: IProduct | null;
    
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
    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }
    public get beginDate(): Date {
        return this._beginDate;
    }
    public set beginDate(value: Date) {
        this._beginDate = value;
    }
    public get endDate(): Date {
        return this._endDate;
    }
    public set endDate(value: Date) {
        this._endDate = value;
    }
    public get productInstance(): IProduct | null {
        return this._productInstance;
    }
    public set productInstance(value: IProduct | null) {
        this._productInstance = value;
    }
    constructor(){
        this._productId=0n;
        this._offerId=0n;
        this._amount=0;
        this._beginDate=new Date();
        this._endDate= new Date();
        this._productInstance = null;
    }
}