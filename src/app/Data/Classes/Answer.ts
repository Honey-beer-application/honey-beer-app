import { IAnswer } from "../Interfaces/IAnswer";

export class Answer implements IAnswer{
    private _eventId: bigint;
    private _questionId: bigint;
    private _answerId: bigint;
    private _value: string;
    
    public get eventId(): bigint {
        return this._eventId;
    }
    public set eventId(value: bigint) {
        this._eventId = value;
    }
    public get questionId(): bigint {
        return this._questionId;
    }
    public set questionId(value: bigint) {
        this._questionId = value;
    }
    public get answerId(): bigint {
        return this._answerId;
    }
    public set answerId(value: bigint) {
        this._answerId = value;
    }
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
    }
    constructor(){
        this._eventId=0n;
        this._questionId=0n;
        this._answerId=0n;
        this._value="";
    }
}