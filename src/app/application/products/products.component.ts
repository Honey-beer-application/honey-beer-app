import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ProductController} from 'src/Data/Controllers/ProductController';
import IProduct from 'src/Data/Interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:[ProductController]
})
export class ProductsComponent {

  public products:IProduct[] = [];
  constructor(private productController:ProductController){
    this.productController.loadAllProducts().subscribe(
      (data:IProduct[])=>this.products=data,
      (error)=>alert(error.error.detail)
    )
  }
  public saveProductToLoad(product:IProduct){
    ProductController.productToLoad = new BehaviorSubject(product);
  }
}
