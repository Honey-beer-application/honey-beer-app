import { HttpClient } from "@angular/common/http";
import { IShoppingLocation } from "../Interfaces/IShoppingLocation";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core"

@Injectable({providedIn:"root"})
export class ShoppingLocationService{
    constructor(private readonly httpClient:HttpClient){

    }
    public loadAllShoppingLocations():Observable<IShoppingLocation[]>{
        return this.httpClient.get<IShoppingLocation[]>("https://localhost:7165/api/ShoppingLocation")
    }
    // public loadAllShoppingLocations():Observable<IShoppingLocation[]>{
    //     return this.httpClient.get<IShoppingLocation[]>("https://honeybeer.bsite.net/api/ShoppingLocation")
    // }
}