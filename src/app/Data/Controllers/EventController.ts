import {Injectable} from "@angular/core"
import { IEvent } from "../Interfaces/IEvent";
import { Observable,BehaviorSubject } from "rxjs";
import { EventService } from "../Services/Event.service";
import {Event} from "./../Classes/Event"
@Injectable({providedIn:"root"})
export class EventController{
    public surveyToLoad:BehaviorSubject<IEvent>;
    constructor(private eventService:EventService){
        this.surveyToLoad = new BehaviorSubject<IEvent>(<IEvent><unknown>(new Event()));
    }
    
    public loadAllEvents():Observable<IEvent[]>{
        return this.eventService.loadAllEvents();
    }
}