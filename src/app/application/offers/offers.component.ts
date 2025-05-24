import { Component, OnDestroy } from '@angular/core';
import OfferController from '../../Data/Controllers/OfferController';
import Offer from 'src/app/Data/Classes/Offer';
import IOffer from 'src/app/Data/Interfaces/IOffer';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

interface IData{
  beginDate:string | null,
  discount: number | null,
  endDate: string| null,
  productDescription:string| null,
  productName:string|null
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnDestroy{

  public offers!:IOffer[];
  private readonly subs:Subscription = new Subscription();
  public offersFG!:FormGroup;
  private readonly discount!:FormControl;
  private readonly offerBeginDate!:FormControl;
  private readonly offerEndDate!:FormControl;
  private readonly productName!:FormControl;
  private readonly productDescription!:FormControl;

  private readonly observable:BehaviorSubject<IOffer[]> = new BehaviorSubject(new Array<IOffer>());


  constructor(private readonly offerController:OfferController,private readonly fb:FormBuilder){
    this.offerController.loadAllOffers().subscribe(
      {
        next:(data:Offer[])=>{
          data.forEach((offer:IOffer)=>{
            offer.beginDate = new Date(offer.beginDate.toString().split('T')[0]);
            offer.endDate = new Date(offer.endDate.toString().split('T')[0]);
            return offer;
          })
          this.observable.next(data);
          this.offers = data;
        },
        error:(error)=>alert(error.error.detail)
      }
    );
    this.offersFG = this.fb.group({
      "discount":this.discount,
      "beginDate":this.offerBeginDate,
      "endDate":this.offerEndDate,
      "productName":this.productName,
      "productDescription":this.productDescription
    });
    this.subs.add(
      this.offersFG.valueChanges
      .subscribe((data:IData)=>{
        this.selectData(data);
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  private selectData(select:IData):void{
    this.observable
    .subscribe((data:IOffer[])=>{
      this.offers = data;
      if(select.discount!=null&&select.discount!=0)
      this.offers =this.offers.filter((item:IOffer)=>item.amount==select.discount);
      if(select.beginDate!=null&&select.beginDate!="")
      this.offers =this.offers.filter((item:IOffer)=> item.beginDate.toISOString()==new Date(String(select.beginDate)).toISOString());
      if(select.endDate!=null&&select.endDate!="")
      this.offers =this.offers.filter((item:IOffer)=>item.endDate.toISOString()==new Date(String(select.endDate)).toISOString());
      if(select.productName!=null)
      this.offers = this.offers.filter((item:IOffer)=>item.productInstance?.name.includes(String(select.productName)));
      if(select.productDescription!=null)
      this.offers = this.offers.filter((item:IOffer)=>item.productInstance?.description.includes(String(select.productDescription)));
    })
  }
  public convertDate(date:Date):string{
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
  }
}
