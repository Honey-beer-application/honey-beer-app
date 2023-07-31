import ICustomer from "../Interfaces/ICustomer";
import IQRCode from "./../Interfaces/IQRCode"
import Customer from "./Customer";
export default class QRCode implements IQRCode{
    private _QRCodeId: bigint;
    private _Code: string;
    private _scannedBy: ICustomer;
    
    public get QRCodeId(): bigint {
        return this._QRCodeId;
    }
    public set QRCodeId(value: bigint) {
        this._QRCodeId = value;
    }
    public get Code(): string {
        return this._Code;
    }
    public set Code(value: string) {
        this._Code = value;
    }
    public get scannedBy(): ICustomer {
        return this._scannedBy;
    }
    public set scannedBy(value: ICustomer) {
        this._scannedBy = value;
    }
    constructor(){
        this._QRCodeId=0n;
        this._Code="";
        this._scannedBy=new Customer();
    }
    
}