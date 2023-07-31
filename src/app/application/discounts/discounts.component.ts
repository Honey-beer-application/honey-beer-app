import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscountController } from 'src/app/Data/Controllers/DiscountController';
import { IDiscount } from 'src/app/Data/Interfaces/IDiscount';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss']
})
export class DiscountsComponent {

  private subs:Subscription = new Subscription();
  public discounts:IDiscount[] = [];
  constructor(private discountController:DiscountController){
    this.subs.add(
      this.discountController.loadAllDiscounts().subscribe(
        (data:IDiscount[])=>{this.discounts=data;},
        (error)=>alert(error.error.detail)
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
