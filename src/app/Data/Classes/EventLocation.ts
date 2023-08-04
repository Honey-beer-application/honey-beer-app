import { IEventLocation } from "../Interfaces/IEventLocation";

export class EventLocation implements IEventLocation{
    private _eventId: bigint;
    private _eventLocationId: bigint;
    private _location: string;
    public get eventId(): bigint {
        return this._eventId;
    }
    public set eventId(value: bigint) {
        this._eventId = value;
    }
    public get eventLocationId(): bigint {
        return this._eventLocationId;
    }
    public set eventLocationId(value: bigint) {
        this._eventLocationId = value;
    }
    public get location(): string {
        return this._location;
    }
    public set location(value: string) {
        this._location = value;
    }
    constructor(){
        this._eventId=0n;
        this._eventLocationId=0n;
        this._location="";
    }
}