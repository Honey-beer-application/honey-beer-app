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

  private readonly subs:Subscription = new Subscription();
  public discounts:IDiscount[] = [];
  constructor(private readonly discountController:DiscountController){
    this.subs.add(
      this.discountController.loadAllDiscounts().subscribe(
        {
          next:(data:IDiscount[])=>{this.discounts=data;},
          error:(error)=>alert(error.error.detail)
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
