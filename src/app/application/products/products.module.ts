import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
