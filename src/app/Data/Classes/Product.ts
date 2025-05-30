import IOffer from "../Interfaces/IOffer";
import IProduct from "../Interfaces/IProduct";
import Offer from "./Offer";

export class Product implements IProduct{
    private _productId: bigint;
    private _name: string;
    private _description: string;    
    private _offerInstance: IOffer;

    public get productId(): bigint {
        return this._productId;
    }
    public set productId(value: bigint) {
        this._productId = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get offerInstance(): IOffer {
        return this._offerInstance;
    }
    public set offerInstance(value: IOffer) {
        this._offerInstance = value;
    }
    constructor(parameters?: {productId?:bigint, name?:string, description?: string, offerInstance?: IOffer}){
        this._productId=parameters?.productId??0n;
        this._name=parameters?.name??"";
        this._description=parameters?.description??"";
        this._offerInstance= parameters?.offerInstance??new Offer();
    }
}