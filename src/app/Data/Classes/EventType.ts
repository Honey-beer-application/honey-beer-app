import { IEventType } from "../Interfaces/IEventType";

export class EventType implements IEventType{
    private _eventTypeId: bigint;
    private _name: string;
    public get eventTypeId(): bigint {
        return this._eventTypeId;
    }
    public set eventTypeId(value: bigint) {
        this._eventTypeId = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(){
        this._eventTypeId=0n;
        this._name="";
    }
    public toJSON(eventType:IEventType){
        return{
            "eventTypeId":Number(eventType.eventTypeId),
            "name":eventType.name,
            "events":[]
        }
    }
}