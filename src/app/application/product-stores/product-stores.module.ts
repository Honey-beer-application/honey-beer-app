import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoresRoutingModule } from './product-stores-routing.module';
import { ProductStoreCardComponent } from './product-store-card/product-store-card.component';



@NgModule({
  declarations: [
    ProductStoreCardComponent
  ],
  imports: [
    CommonModule,
    ProductStoresRoutingModule
  ],
  exports:[ProductStoreCardComponent]
})
export class ProductStoresModule { }
