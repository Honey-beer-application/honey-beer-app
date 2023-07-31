import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { IEvent } from "../Interfaces/IEvent";
import { Observable } from "rxjs";
@Injectable({providedIn:"root"})
export class EventService{
    constructor(private httpClient:HttpClient){
    }
    public loadAllEvents():Observable<IEvent[]>{
        return this.httpClient.get<IEvent[]>("https://localhost:7165/api/Event");
    }
}