import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Data/Classes/Product';
import OfferController from 'src/app/Data/Controllers/OfferController';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import IProduct from 'src/app/Data/Interfaces/IProduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input('product') product:IProduct;

  constructor(private router:Router){
    this.product = new Product();
  }
  public redirectToCreateOffer(product:IProduct):void{
    ProductController.setProduct(product);
    this.router.navigateByUrl(`/app/new_offer/${this.product.productId}/create`);
  }
}
