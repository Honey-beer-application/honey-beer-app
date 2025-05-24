import { Component, Input } from '@angular/core';
import IProduct from './../../../Data/Interfaces/IProduct';
import {Product} from "./../../../Data/Classes/Product";
import { Router } from '@angular/router';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [HttpClient],
})
export class ProductCardComponent {

  @Input('product') product:IProduct;

  constructor(private readonly router:Router,private readonly productController:ProductController){
    this.product = new Product();
  }
  public redirectToProduct(product:IProduct):void{
    this.router.navigateByUrl(`app/products/${product.productId}`);
    this.productController.setProduct(product);
  }
}
