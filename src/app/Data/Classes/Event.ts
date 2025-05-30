import { IEvent } from "../Interfaces/IEvent";
import { IEventLocation } from "../Interfaces/IEventLocation";
import { IEventType } from "../Interfaces/IEventType";
import { IQuestion } from "../Interfaces/IQuestion";
import { EventType } from "./EventType";
import { Question } from "./Question";

export class Event implements IEvent{
    private _eventId: bigint;
    private _title: string;
    private _description: string;
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
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
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
    constructor(parameters?:{beginDate?: Date, creationDate?: Date, description?: string, endDate?: Date, eventId?:bigint, eventTypeId?: bigint, eventTypeInstance?: EventType, questions?: IQuestion[], title?: string, eventLocations?: IEventLocation[]}){
        this._beginDate = parameters?.beginDate??null;
        this._creationDate = parameters?.creationDate??new Date();
        this._description = parameters?.description??"";
        this._endDate= parameters?.endDate??new Date();
        this._eventId = parameters?.eventId??0n;
        this._eventTypeId = parameters?.eventTypeId??0n;
        this._eventTypeInstance = parameters?.eventTypeInstance??new EventType();
        this._questions = parameters?.questions??[];
        this._title=parameters?.title??"";
        this._eventLocations = parameters?.eventLocations??[];
    }
    
    
    public arrayToJSON(array:IQuestion[]){
        let result:Object[]=[];
        array.forEach((question:IQuestion)=>result.push(new Question().toJSON(question)))
        return result;
    }
    public toJSON(event:IEvent){
        return {
            "beginDate":event.beginDate,
            "creationDate":event.creationDate,
            "description":event.description,
            "endDate":event.endDate,
            "eventId":Number(event.eventId),
            "eventTypeId":Number(event.eventTypeId),
            "eventTypeInstance":new EventType().toJSON(event.eventTypeInstance),
            "questions":new Event().arrayToJSON(event.questions),
            "title":event.title,
            "eventLocations":new Array<Object>()
        };
    }
}