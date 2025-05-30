import { ILocation } from "../Interfaces/ILocation";

export class Location implements ILocation{
    private _locationId: bigint;
    private _locationName: string;
    private _phone: string;
    private _email: string;
    public get locationId(): bigint {
        return this._locationId;
    }
    public set locationId(value: bigint) {
        this._locationId = value;
    }
    public get locationName(): string {
        return this._locationName;
    }
    public set locationName(value: string) {
        this._locationName = value;
    }
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    constructor(parameters?:{locationId?: bigint, locationName?: string, phone?: string, email?: string}){
        this._locationId=parameters?.locationId??0n;
        this._locationName=parameters?.locationName??"";
        this._phone=parameters?.phone??"";
        this._email=parameters?.email??"";
    }
    
}