import { IEventLocation } from "./IEventLocation";
import { IEventType } from "./IEventType";
import { IQuestion } from "./IQuestion";

export interface IEvent{
    eventId:bigint;
    title:string;
    description:string;
    creationDate:Date;
    beginDate:Date|null;
    endDate:Date|null;
    eventTypeId:bigint;
    eventTypeInstance:IEventType;
    questions:IQuestion[];
    eventLocations:IEventLocation[];
}