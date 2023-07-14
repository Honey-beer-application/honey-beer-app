import { Component, Input } from '@angular/core';
import IProduct from 'src/Data/Interfaces/IProduct';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {

  @Input('product') product!:IProduct;
}
