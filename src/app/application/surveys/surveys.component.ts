import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnDestroy {

  public surveys:IEvent[];
  private subs:Subscription;
  constructor(private eventController:EventController){
    this.subs = new Subscription();
    this.surveys = new Array<IEvent>();
    this.subs.add(
      this.eventController.loadAllEvents().subscribe((data:IEvent[])=>{
        console.log("data: ");
        console.log(data);
        this.surveys=data;
      })
    )
    
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
