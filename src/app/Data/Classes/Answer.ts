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
    constructor(parameters?:{eventId?:bigint,questionId?:bigint, answerId?:bigint, value?:string}){
        this._eventId=parameters?.eventId??0n;
        this._questionId=parameters?.questionId??0n;
        this._answerId=parameters?.answerId??0n;
        this._value=parameters?.value??"";
    }
    toJSON(answer:IAnswer): {} {
        return {
            "eventId":Number(answer.eventId),
            "questionId":Number(answer.questionId),
            "answerId":Number(answer.answerId),
            "value":answer.value.toString(),
            "eventQuestion":null,
            "customerAnswer":null
        }
    }
}