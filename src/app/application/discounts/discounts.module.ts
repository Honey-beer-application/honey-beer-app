import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsComponent } from './discounts.component';
import { DiscountsRoutingModule } from './discounts-routing.module';
import { DiscountCardComponent } from './discount-card/discount-card.component';



@NgModule({
  declarations: [
    DiscountsComponent,
    DiscountCardComponent
  ],
  imports: [
    CommonModule,
    DiscountsRoutingModule
  ],
  exports:[DiscountCardComponent]
})
export class DiscountsModule { }
