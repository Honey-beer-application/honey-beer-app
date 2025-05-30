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
    constructor(parameters?:{PIB?:bigint|null,name?:string|null,email?:string|null,password?:string| null} | undefined){
        this._PIB=parameters?.PIB??BigInt(0);
        this._name = parameters?.name??"";
        this._email = parameters?.email??"";
        this._password = parameters?.password??"";
    }
    public setPIB(value :bigint) : this{
        this._PIB = value;
        return this;
    }
    public setName(value: string): this{
        this._name = value;
        return this;
    }
    public setPassword(value: string): this{
        this._password = value;
        return this;
    }
    public setEmail(value: string): this{
        this._email = value;
        return this;
    }
}