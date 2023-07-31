import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { ShoppingLocationController } from 'src/app/Data/Controllers/ShoppingLocationController';
import IProduct from 'src/app/Data/Interfaces/IProduct';
import { IShoppingLocation } from 'src/app/Data/Interfaces/IShoppingLocation';

@Component({
  selector: 'app-product-stores',
  templateUrl: './product-stores.component.html',
  styleUrls: ['./product-stores.component.scss']
})
export class ProductStoresComponent {

  private subs:Subscription = new Subscription();
  public shoppingLocations:IShoppingLocation[] = [];
  constructor(private shoppingLocationController:ShoppingLocationController){
    this.subs.add(
      this.shoppingLocationController.loadAllShoppingLocations().subscribe(
        (data:IShoppingLocation[])=>this.shoppingLocations=data,
        (error)=>alert(error.error.detail)
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
