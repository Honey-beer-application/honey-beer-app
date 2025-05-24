import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {ProductController} from './../../Data/Controllers/ProductController';
import IProduct from './../../Data/Interfaces/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnDestroy {

  private readonly subs:Subscription = new Subscription();
  public products:IProduct[] = [];
  constructor(private readonly productController:ProductController){
    this.subs.add(
      this.productController.loadAllProducts().subscribe(
        {
          next:(data:IProduct[])=>this.products=data,
          error:(error)=>alert(error.error.detail)
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
