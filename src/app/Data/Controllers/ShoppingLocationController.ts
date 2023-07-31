import { Observable } from "rxjs";
import { IShoppingLocation } from "../Interfaces/IShoppingLocation";
import { ShoppingLocationService } from "../Services/ShoppingLocation.service";
import {Injectable} from "@angular/core"
@Injectable({providedIn:"root"})
export class ShoppingLocationController{
    constructor(private shoppingLocationService:ShoppingLocationService){

    }
    public loadAllShoppingLocations():Observable<IShoppingLocation[]>{
        return this.shoppingLocationService.loadAllShoppingLocations();
    }
}