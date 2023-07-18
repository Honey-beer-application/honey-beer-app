import ICompany from "./../Interfaces/ICompany";
export default class Company implements ICompany{
    private _PIB: bigint;
    private _name: string;
    private _email: string;
    private _password: string;

    public get PIB(): bigint {
        return this._PIB;
    }
    public set PIB(value: bigint) {
        this._PIB = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    constructor(){
        this._PIB=0n;
        this._name = "";
        this._email = "";
        this._password = "";
    }
}