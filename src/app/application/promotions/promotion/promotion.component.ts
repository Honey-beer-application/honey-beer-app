import { Component } from '@angular/core';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import { Event } from 'src/app/Data/Classes/Event';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent {

  public promotion:IEvent;
  private map!:any;
  private readonly subs:Subscription;
  constructor(private readonly eventController:EventController){
    this.subs = new Subscription();
    this.promotion= new Event();
    this.subs.add(
      this.eventController.surveyToLoad.asObservable().subscribe((data:IEvent)=>{
        this.promotion=data;
      })
    )
  }

  ngAfterViewInit(): void {
    this.map= L.map('map1', {
      center: [44.8, 20.46],
      zoom: 13
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
