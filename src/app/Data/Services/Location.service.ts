import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { ILocation } from "../Interfaces/ILocation";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class LocationService{
    constructor(private readonly httpClient:HttpClient){

    }
    public loadAllLocations():Observable<ILocation[]>{
        return this.httpClient.get<ILocation[]>(environment.apiUrl+"/api/Location");
    }
    // public loadAllLocations():Observable<ILocation[]>{
    //     return this.httpClient.get<ILocation[]>("https://honeybeer.bsite.net/api/Location");
    // }
}