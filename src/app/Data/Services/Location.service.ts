import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { ILocation } from "../Interfaces/ILocation";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class LocationService{
    constructor(private readonly httpClient:HttpClient){

    }
    public loadAllLocations():Observable<ILocation[]>{
        return this.httpClient.get<ILocation[]>("https://localhost:7165/api/Location");
    }
    // public loadAllLocations():Observable<ILocation[]>{
    //     return this.httpClient.get<ILocation[]>("https://honeybeer.bsite.net/api/Location");
    // }
}