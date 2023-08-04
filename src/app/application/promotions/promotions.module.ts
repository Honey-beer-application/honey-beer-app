import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions.component';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionCardComponent } from './promotion-card/promotion-card.component';



@NgModule({
  declarations: [
    PromotionsComponent,
    PromotionCardComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule
  ]
})
export class PromotionsModule { }
