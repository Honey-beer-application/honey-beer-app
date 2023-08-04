import { IEvent } from "../Interfaces/IEvent";
import { IEventLocation } from "../Interfaces/IEventLocation";
import { IEventType } from "../Interfaces/IEventType";
import { IQuestion } from "../Interfaces/IQuestion";
import { EventType } from "./EventType";

export class Event implements IEvent{
    private _eventId: bigint;
    private _title: string;
    private _decription: string;
    private _creationDate: Date;
    private _beginDate: Date | null;
    private _endDate: Date | null;
    private _eventTypeId: bigint;
    private _eventTypeInstance: IEventType;
    private _questions: IQuestion[];
    private _eventLocations: IEventLocation[];
    public get questions(): IQuestion[] {
        return this._questions;
    }
    public set questions(value: IQuestion[]) {
        this._questions = value;
    }
    public get eventId(): bigint {
        return this._eventId;
    }
    public set eventId(value: bigint) {
        this._eventId = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get description(): string {
        return this._decription;
    }
    public set description(value: string) {
        this._decription = value;
    }
    public get creationDate(): Date {
        return this._creationDate;
    }
    public set creationDate(value: Date) {
        this._creationDate = value;
    }
    public get beginDate(): Date | null {
        return this._beginDate;
    }
    public set beginDate(value: Date | null) {
        this._beginDate = value;
    }
    public get endDate(): Date | null {
        return this._endDate;
    }
    public set endDate(value: Date | null) {
        this._endDate = value;
    }
    public get eventTypeId(): bigint {
        return this._eventTypeId;
    }
    public set eventTypeId(value: bigint) {
        this._eventTypeId = value;
    }
    public get eventTypeInstance(): IEventType {
        return this._eventTypeInstance;
    }
    public set eventTypeInstance(value: IEventType) {
        this._eventTypeInstance = value;
    }
    public get eventLocations(): IEventLocation[] {
        return this._eventLocations;
    }
    public set eventLocations(value: IEventLocation[]) {
        this._eventLocations = value;
    }
    constructor(){
        this._beginDate = null;
        this._creationDate = new Date();
        this._decription = "";
        this._endDate= new Date();
        this._eventId = 0n;
        this._eventTypeId = 0n;
        this._eventTypeInstance = new EventType();
        this._questions = [];
        this._title="";
        this._eventLocations = [];
    }
    
}