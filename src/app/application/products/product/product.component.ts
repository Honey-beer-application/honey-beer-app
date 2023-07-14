import { Component } from '@angular/core';
import { Product } from 'src/Data/Classes/Product';
import { ProductController } from 'src/Data/Controllers/ProductController';
import IProduct from 'src/Data/Interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductComponent]
})
export class ProductComponent {

  public product:IProduct=new Product();
  constructor(private productController:ProductController){
    ProductController.productToLoad.subscribe((data:IProduct)=>console.log(data));
  }
}
