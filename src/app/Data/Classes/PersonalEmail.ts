import IPersonalEmail from "../Interfaces/IPersonalEmail";

export default class PersonalEmail implements IPersonalEmail{
    private _email: string;

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    constructor(){
        this._email = "";
    }
}