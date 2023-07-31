import IProduct from "../Interfaces/IProduct";
import IReservation from "../Interfaces/IReservation";
import { Product } from "./Product";

export default class Reservation implements IReservation{
    private _reservationId: bigint;
    private _productId: bigint;
    private _pib: bigint;
    private _amount: number;
    private _delivery: Date;
    private _productInstance: IProduct;

    public get reservationId(): bigint {
        return this._reservationId;
    }
    public set reservationId(value: bigint) {
        this._reservationId = value;
    }
    public get productId(): bigint{
        return this._productId
    }
    public set productId(value: bigint){
        this._productId=value;
    }
    public get pib(): bigint {
        return this._pib;
    }
    public set pib(value: bigint) {
        this._pib = value;
    }
    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }
    public get delivery(): Date {
        return this._delivery;
    }
    public set delivery(value: Date) {
        this._delivery = value;
    }
    public get productInstance(): IProduct {
        return this._productInstance;
    }
    public set productInstance(value: IProduct) {
        this._productInstance = value;
    }
    constructor(){
        this._reservationId = 0n;
        this._productId=0n;
        this._pib=0n;
        this._amount=0;
        this._delivery = new Date();
        this._productInstance = new Product();
        
    }
}