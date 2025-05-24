import { Component } from '@angular/core';
import { Product } from './../../../Data/Classes/Product';
import { ProductController } from './../../../Data/Controllers/ProductController';
import IProduct from './../../../Data/Interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{

  public product:IProduct=new Product();
  constructor(private readonly productController:ProductController){
    ProductController.productToLoadObservable.subscribe((data:IProduct)=>this.product=data);
  }
}
