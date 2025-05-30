import { IMeeting } from "../Interfaces/IMeeting";

export class Meeting implements IMeeting{
    private _meetingId: bigint;
    private _subject: string;
    private _startTime: Date;
    private _endTime: Date;
    private _location: string;
    private _pib: bigint;
    public get meetingId(): bigint {
        return this._meetingId;
    }
    public set meetingId(value: bigint) {
        this._meetingId = value;
    }
    public get subject(): string {
        return this._subject;
    }
    public set subject(value: string) {
        this._subject = value;
    }
    public get startTime(): Date {
        return this._startTime;
    }
    public set startTime(value: Date) {
        this._startTime = value;
    }
    public get endTime(): Date {
        return this._endTime;
    }
    public set endTime(value: Date) {
        this._endTime = value;
    }
    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }
    public get pib(): bigint {
        return this._pib;
    }
    public set pib(value: bigint) {
        this._pib = value;
    }
    constructor(parameters?:{meetingId?:bigint, subject?: string, startTime?: Date,endTime?: Date, location?: string,pib?:bigint}){
        this._endTime=parameters?.endTime??new Date();
        this._location=parameters?.location??"";
        this._meetingId=parameters?.meetingId??0n;
        this._startTime=parameters?.startTime??new Date();
        this._subject=parameters?.subject??"";
        this._pib = parameters?.pib??0n;
    }
    
}