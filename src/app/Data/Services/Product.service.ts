import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import IProduct from "../Interfaces/IProduct";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class ProductService{
    constructor(private httpClient:HttpClient){

    }

    // public loadAllProducts():Observable<IProduct[]>{
    //     return this.httpClient.get<IProduct[]>("https://localhost:7165/api/product");
    // }
    public loadAllProducts():Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>("https://honeybeer.bsite.net/api/product");
    }
}