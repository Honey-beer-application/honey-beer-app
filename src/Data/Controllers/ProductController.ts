import {Injectable} from "@angular/core"
import {ProductService} from "../Services/Product.service";
import IProduct from "../Interfaces/IProduct";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../Classes/Product";

@Injectable({providedIn:"root"})
 export class ProductController{

    private static _productToLoad: Observable<IProduct> = new BehaviorSubject(new Product());
    public static get productToLoad(): Observable<IProduct> {
        return ProductController._productToLoad;
    }
    public static set productToLoad(value: Observable<IProduct>) {
        ProductController._productToLoad = value;
    }
   
    constructor(private productService:ProductService){
    }
    public loadAllProducts():Observable<Array<IProduct>>{
        return this.productService.loadAllProducts();
    }
 }