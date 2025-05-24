import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingLocation } from 'src/app/Data/Classes/ShoppingLocation';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { IShoppingLocation } from 'src/app/Data/Interfaces/IShoppingLocation';

@Component({
  selector: 'app-product-store-card',
  templateUrl: './product-store-card.component.html',
  styleUrls: ['./product-store-card.component.scss']
})
export class ProductStoreCardComponent {

  @Input('shoppingLocation') shoppingLocation:IShoppingLocation;

  constructor(private readonly router:Router,private readonly productController:ProductController){
    this.shoppingLocation = new ShoppingLocation();
  }
}
