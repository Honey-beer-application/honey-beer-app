import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Subscription } from 'rxjs';
import { LocationController } from 'src/app/Data/Controllers/LocationController';
import { ILocation } from 'src/app/Data/Interfaces/ILocation';
@Component({
  selector: 'app-our-stores',
  templateUrl: './our-stores.component.html',
  styleUrls: ['./our-stores.component.scss']
})
export class OurStoresComponent implements AfterViewInit{

  public locations:ILocation[];
  private map!:any;
  private subs:Subscription;
  constructor(private locationController:LocationController){
    this.subs = new Subscription();
    this.locations=[];
    this.subs.add(
      this.locationController.loadAllLocations().subscribe(
        (data:ILocation[])=>{
          this.locations=data;
          console.log(data);
        }
      )
    )
  }

  ngAfterViewInit(): void {
    this.map= L.map('map', {
      center: [44.8, 20.46],
      zoom: 13
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  
}
