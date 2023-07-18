import ICustomer from "../Interfaces/ICustomer";
import IPersonalEmail from "../Interfaces/IPersonalEmail";
import PersonalEmail from "./PersonalEmail";

export default class Customer implements ICustomer{
    private _customerId: bigint;
    private _username: string;
    private _email: string;
    private _password: string;
    private _personalEmailInstance: IPersonalEmail;
    
    public get customerId(): bigint {
        return this._customerId;
    }
    public set customerId(value: bigint) {
        this._customerId = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get personalEmailInstance(): IPersonalEmail {
        return this._personalEmailInstance;
    }
    public set personalEmailInstance(value: IPersonalEmail) {
        this._personalEmailInstance = value;
    }
    constructor(){
        this._customerId= 0n;
        this._email = "";
        this._username = "";
        this._password = "";
        this._personalEmailInstance = new PersonalEmail();
    }
}