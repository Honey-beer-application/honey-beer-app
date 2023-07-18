import { Component, Input } from '@angular/core';
import IProduct from './../../../Data/Interfaces/IProduct';
import {Product} from "./../../../Data/Classes/Product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product:IProduct;

  constructor(){
    this.product = new Product();
  }
}
