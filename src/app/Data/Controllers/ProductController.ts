import {Injectable} from "@angular/core"
import {ProductService} from "../Services/Product.service";
import IProduct from "../Interfaces/IProduct";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../Classes/Product";

@Injectable({providedIn:"root"})
 export class ProductController{
    setProduct(product: IProduct) {
      ProductController._productToLoad.next(product);
    }

    private static readonly _productToLoad: BehaviorSubject<IProduct> = new BehaviorSubject(<IProduct>(new Product()));
    public static get productToLoadObservable(){
      return ProductController._productToLoad.asObservable();
    }
    
   public static setProduct(product:IProduct){
    ProductController._productToLoad.next(product);
   }
    constructor(private readonly productService:ProductService){
    }
    public loadAllProducts():Observable<Array<IProduct>>{
        return this.productService.loadAllProducts();
    }
 }