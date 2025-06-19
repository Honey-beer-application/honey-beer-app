import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import IProduct from "../Interfaces/IProduct";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ProductService{
    constructor(private readonly httpClient:HttpClient){

    }

    public loadAllProducts():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(environment.apiUrl+"/api/product");
    }
    // public loadAllProducts():Observable<IProduct[]>{
    //     return this.httpClient.get<IProduct[]>("https://honeybeer.bsite.net/api/product");
    // }
}