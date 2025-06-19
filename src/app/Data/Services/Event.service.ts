import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { IEvent } from "../Interfaces/IEvent";
import { Observable } from "rxjs";
import { Event } from "../Classes/Event";
import { environment } from "src/environments/environment";
@Injectable({providedIn:"root"})
export class EventService{

    constructor(private readonly httpClient:HttpClient){
    }


    public loadAllEvents():Observable<IEvent[]>{
        return this.httpClient.get<IEvent[]>(environment.apiUrl+"/api/Event");
    }
    public loadAllPromotions(): Observable<IEvent[]> {
        return this.httpClient.get<IEvent[]>(environment.apiUrl+"/api/Promotion");
    }
    public saveEventForm(eventForm: IEvent):Observable<boolean> {
        return this.httpClient.post<boolean>(environment.apiUrl+"/api/Form",
        (new Event()).toJSON(eventForm)
        );
    }
    // public loadAllEvents():Observable<IEvent[]>{
    //     return this.httpClient.get<IEvent[]>("https://honeybeer.bsite.net/api/Event");
    // }
    // public loadAllPromotions(): Observable<IEvent[]> {
    //     return this.httpClient.get<IEvent[]>("https://honeybeer.bsite.net/api/Promotion");
    // }
    // public saveEventForm(eventForm: IEvent):Observable<boolean> {
    //     return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/Form",
    //     (new Event()).toJSON(eventForm)
    //     );
    // }
}