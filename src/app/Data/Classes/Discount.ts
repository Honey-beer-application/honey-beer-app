import { IDiscount } from "../Interfaces/IDiscount";
import IProduct from "../Interfaces/IProduct";
import { IShoppingLocation } from "../Interfaces/IShoppingLocation";
import { Product } from "./Product";
import { ShoppingLocation } from "./ShoppingLocation";

export class Discount implements IDiscount{
    private _pib: bigint;
    private _shoppingLocationId: bigint;
    private _productId: bigint;
    private _percentage: number;
    private _beginDate: Date;
    private _endDate: Date;
    private _shoppingLocationInstance: IShoppingLocation;
    private _productInstance: IProduct;
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
    public get productId(): bigint {
        return this._productId;
    }
    public set productId(value: bigint) {
        this._productId = value;
    }
    public get percentage(): number {
        return this._percentage;
    }
    public set percentage(value: number) {
        this._percentage = value;
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
    public get shoppingLocationInstance(): IShoppingLocation {
        return this._shoppingLocationInstance;
    }
    public set shoppingLocationInstance(value: IShoppingLocation) {
        this._shoppingLocationInstance = value;
    }
    public get productInstance(): IProduct {
        return this._productInstance;
    }
    public set productInstance(value: IProduct) {
        this._productInstance = value;
    }
    constructor(){
    this._pib=0n;
    this._shoppingLocationId=0n;
    this._productId=0n;
    this._percentage=0;
    this._beginDate= new Date();
    this._endDate= new Date();
    this._shoppingLocationInstance= new ShoppingLocation();
    this._productInstance= new Product();
    }
}