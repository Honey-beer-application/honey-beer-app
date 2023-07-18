import { Component } from '@angular/core';
import { Product } from './../../../Data/Classes/Product';
import { ProductController } from './../../../Data/Controllers/ProductController';
import IProduct from './../../../Data/Interfaces/IProduct';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  public product:IProduct=new Product();
  constructor(private productController:ProductController){
  }
  ngOnInit(): void {
    ProductController.productToLoad.subscribe((data:IProduct)=>console.log(data));
  }
}
