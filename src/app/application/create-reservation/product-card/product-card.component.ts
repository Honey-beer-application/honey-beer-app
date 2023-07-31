import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Data/Classes/Product';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import IProduct from 'src/app/Data/Interfaces/IProduct';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product:IProduct;

  constructor(private router:Router,private productController:ProductController,private reservationController:ReservationController){
    this.product = new Product();
  }
  public redirectToProduct(product:IProduct):void{
    this.router.navigateByUrl(`app/products/${product.productId}`);
    this.productController.setProduct(product);
  }
  public redirectToNewReservation(product:IProduct){
    this.reservationController.productBS.next(product);
    this.router.navigateByUrl(`/app/create-reservation/${product.productId}/new-reservation`);
  }
}
