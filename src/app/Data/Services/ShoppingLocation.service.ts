import { HttpClient } from "@angular/common/http";
import { IShoppingLocation } from "../Interfaces/IShoppingLocation";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core"
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ShoppingLocationService{
    constructor(private readonly httpClient:HttpClient){

    }
    public loadAllShoppingLocations():Observable<IShoppingLocation[]>{
        return this.httpClient.get<IShoppingLocation[]>(environment.apiUrl+"/api/ShoppingLocation")
    }
    // public loadAllShoppingLocations():Observable<IShoppingLocation[]>{
    //     return this.httpClient.get<IShoppingLocation[]>("https://honeybeer.bsite.net/api/ShoppingLocation")
    // }
}