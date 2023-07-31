import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from 'src/app/Data/Classes/Discount';
import { IDiscount } from 'src/app/Data/Interfaces/IDiscount';

@Component({
  selector: 'app-discount-card',
  templateUrl: './discount-card.component.html',
  styleUrls: ['./discount-card.component.scss']
})
export class DiscountCardComponent {

  @Input('discount') discount:IDiscount;

  constructor(private router:Router){
    this.discount = new Discount();
  }
}
