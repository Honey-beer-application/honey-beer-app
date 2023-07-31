import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Data/Classes/Product';
import { ShoppingLocation } from 'src/app/Data/Classes/ShoppingLocation';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import IProduct from 'src/app/Data/Interfaces/IProduct';
import { IShoppingLocation } from 'src/app/Data/Interfaces/IShoppingLocation';

@Component({
  selector: 'app-product-store-card',
  templateUrl: './product-store-card.component.html',
  styleUrls: ['./product-store-card.component.scss']
})
export class ProductStoreCardComponent implements OnInit {

  @Input('shoppingLocation') shoppingLocation:IShoppingLocation;

  constructor(private router:Router,private productController:ProductController){
    this.shoppingLocation = new ShoppingLocation();
  }
  ngOnInit(): void {
    console.log(this.shoppingLocation);
  }
}
