import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnDestroy {

  private readonly subs:Subscription = new Subscription();
  public promotions:IEvent[] = [];
  constructor(private readonly eventController:EventController){
    this.subs.add(
      this.eventController.loadAllPromotions().subscribe(
        {
          next: (data:IEvent[])=>this.promotions=data,
          error: (error)=>alert(error.error.detail)
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
