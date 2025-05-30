import {Injectable} from "@angular/core"
import {ProductService} from "../Services/Product.service";
import IProduct from "../Interfaces/IProduct";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../Classes/Product";

@Injectable({providedIn:"root"})
 export class ProductController{

    private readonly _productToLoad: BehaviorSubject<IProduct> = new BehaviorSubject(<IProduct>(new Product()));
    public get productToLoadObservable(){
      return this._productToLoad.asObservable();
    }
    
   public setProduct(product:IProduct){
    this._productToLoad.next(product);
   }
    constructor(private readonly productService:ProductService){
    }
    public loadAllProducts():Observable<Array<IProduct>>{
        return this.productService.loadAllProducts();
    }
 }