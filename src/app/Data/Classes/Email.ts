import { IEmail } from "../Interfaces/IEmail";

export class Email implements IEmail{
    private _email: string;
    private _dateAndTime: Date;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get dateAndTime(): Date {
        return this._dateAndTime;
    }
    public set dateAndTime(value: Date) {
        this._dateAndTime = value;
    }
    constructor(){
        this._email="";
        this._dateAndTime=new Date();
    }
}