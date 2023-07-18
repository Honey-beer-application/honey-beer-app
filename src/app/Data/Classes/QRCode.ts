import IQRCode from "./../Interfaces/IQRCode"
export default class QRCode implements IQRCode{
    private _QRCodeId: bigint;
    private _Code: string;
    private _Scanned: boolean;
    
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
    public get Scanned(): boolean {
        return this._Scanned;
    }
    public set Scanned(value: boolean) {
        this._Scanned = value;
    }
    constructor(){
        this._QRCodeId=0n;
        this._Code="";
        this._Scanned=false;
    }
}