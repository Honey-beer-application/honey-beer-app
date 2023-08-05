import { ISentCompanyEmail } from "../Interfaces/ISentCompanyEmail";

export class SentCompanyEmail implements ISentCompanyEmail{
    private _pib: bigint;
    private _dateAndTime: Date;
    public get pib(): bigint {
        return this._pib;
    }
    public set pib(value: bigint) {
        this._pib = value;
    }
    public get dateAndTime(): Date {
        return this._dateAndTime;
    }
    public set dateAndTime(value: Date) {
        this._dateAndTime = value;
    }
    constructor(){
        this._pib=0n;
        this._dateAndTime=new Date();
    }
}