import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import OfferByCompany from 'src/app/Data/Classes/OfferByCompany';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import OfferController from 'src/app/Data/Controllers/OfferController';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import IOffer from 'src/app/Data/Interfaces/IOffer';
import IOfferByCompany from 'src/app/Data/Interfaces/IOfferByCompany';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnDestroy{

  private subs:Subscription = new Subscription();
  public offerByCompany:IOfferByCompany;

  public offerByCompanyForm!:FormGroup;
  public offerAmount:FormControl;
  public offerBeginDate:FormControl;
  public offerEndDate:FormControl;
  constructor(private fb:FormBuilder,private offerByCompanyController:OfferByCompanyController, private companyController:CompanyController){
    this.offerByCompany = new OfferByCompany();
    this.subs.add(
      this.companyController.companyObservable.subscribe((data:ICompany)=>{
        this.offerByCompany.companyInstance=data;
        this.offerByCompany.pib=data.PIB;
      })
    )
    this.subs.add(
      OfferController.offerToLoadObservable.subscribe((data:IOffer)=>{
        this.offerByCompany.offerId=data.offerId;
        this.offerByCompany.productId = data.productId;
        this.offerByCompany.offerInstance = data;
      })
    )
    this.offerAmount = new FormControl(this.offerByCompany.offerInstance.amount,[Validators.required,Validators.min(0)]);
    this.offerBeginDate = new FormControl(this.offerByCompany.offerInstance.beginDate.toLocaleDateString(),Validators.required);
    this.offerEndDate = new FormControl(this.offerByCompany.offerInstance.endDate.toLocaleDateString(),Validators.required)
    this.offerByCompanyForm = this.fb.group({
      discount:this.offerAmount,
      beginDate:this.offerBeginDate,
      endDate:this.offerEndDate
    });
    this.subs.add(
      this.offerByCompanyForm.valueChanges
      .pipe(filter(data=>this.offerByCompanyForm.valid))
      .subscribe((data:{discount:number,beginDate:any,endDate:any})=>{
        this.offerByCompany.offerInstance.amount=data.discount;
        this.offerByCompany.offerInstance.beginDate = new Date(data.beginDate);
        this.offerByCompany.offerInstance.endDate = new Date(data.endDate);
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public saveOfferByComapny(){
    this.subs.add(
      this.offerByCompanyController.saveOfferByCompany(this.offerByCompany).subscribe(
        (data)=>alert("Offer is successfully saved."),
        (error)=>alert(error))
    )
  }
  public convertDate(date:Date){
    let month:number = date.getMonth()+1;
    let day:number = date.getDate();
    return date.getFullYear()+"-"+(month<10?'0'+month:month)+"-"+(day<10?'0'+day:day);
  }
}
