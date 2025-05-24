import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingLocationController } from 'src/app/Data/Controllers/ShoppingLocationController';
import { IShoppingLocation } from 'src/app/Data/Interfaces/IShoppingLocation';

@Component({
  selector: 'app-product-stores',
  templateUrl: './product-stores.component.html',
  styleUrls: ['./product-stores.component.scss']
})
export class ProductStoresComponent {

  private readonly subs:Subscription = new Subscription();
  public shoppingLocations:IShoppingLocation[] = [];
  constructor(private readonly shoppingLocationController:ShoppingLocationController){
    this.subs.add(
      this.shoppingLocationController.loadAllShoppingLocations().subscribe(
        {
          next: (data:IShoppingLocation[])=>this.shoppingLocations=data,
          error: (error)=>alert(error.error.detail)
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
