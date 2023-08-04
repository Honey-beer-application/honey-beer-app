import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import {Event} from './../../../Data/Classes/Event';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.scss']
})
export class PromotionCardComponent {

  @Input('promotion') promotion:IEvent;

  constructor(private router:Router,private eventController:EventController){
    this.promotion = new Event();
  }
  public redirectToPromotion(promotion:IEvent):void{
    this.router.navigateByUrl(`app/promotions/${promotion.eventId}`);
    this.eventController.setEvent(promotion);
  }
}
