import {Injectable} from "@angular/core";
import { LocationService } from "../Services/Location.service";
import { Observable } from "rxjs";
import { ILocation } from "../Interfaces/ILocation";
@Injectable({providedIn:"root"})
export class LocationController{
    constructor(private readonly locationService:LocationService){

    }
    public loadAllLocations():Observable<ILocation[]>{
        return this.locationService.loadAllLocations();
    }
}