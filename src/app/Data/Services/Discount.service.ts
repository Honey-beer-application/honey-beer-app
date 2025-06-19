import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { IDiscount } from "../Interfaces/IDiscount";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({providedIn:"root"})
export class DiscountService{
    constructor(private readonly httpClient:HttpClient){

    }
    public loadAllDiscounts():Observable<IDiscount[]>{
        return this.httpClient.get<IDiscount[]>(environment.apiUrl+"/api/Discount");
    }
    // public loadAllDiscounts():Observable<IDiscount[]>{
    //     return this.httpClient.get<IDiscount[]>("https://honeybeer.bsite.net/api/Discount");
    // }
}