import { Component, OnDestroy } from '@angular/core';
import {OfferByCompanyController} from './../../../Data/Controllers/OfferByCompanyController';
import IOfferByCompany from 'src/app/Data/Interfaces/IOfferByCompany';
import { ActivatedRoute } from '@angular/router';
import OfferByCompany from 'src/app/Data/Classes/OfferByCompany';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import ICompany from 'src/app/Data/Interfaces/ICompany';


@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent implements OnDestroy{


  private readonly subs:Subscription = new Subscription();

  private registeredCompany!:ICompany;

  public offerByCompanyForm!:FormGroup;
  public offerAmount:FormControl;
  public offerBeginDate:FormControl;
  public offerEndDate:FormControl;
  public offerByCompany!:IOfferByCompany;
  constructor(
    private readonly offerByCompanyController:OfferByCompanyController, 
    private readonly activatedRoute:ActivatedRoute,
    private readonly companyController:CompanyController,
    private readonly fb:FormBuilder)
  {

      this.offerAmount = new FormControl('',[Validators.required,Validators.min(0)]);
      this.offerBeginDate = new FormControl('',Validators.required);
      this.offerEndDate = new FormControl('',Validators.required);

      //loading company
      this.subs.add(
        this.companyController.companyObservable.subscribe((data:ICompany)=>this.registeredCompany=data)
      )
      
      //loading offerByCompany
      this.offerByCompanyController.offerByCompanyToLoadObservable.subscribe((data:IOfferByCompany)=>this.offerByCompany=data);

      //loading offerByCompany from database
      this.subs.add(
        this.offerByCompanyController.getOfferByCompany(activatedRoute.snapshot.params['id'])
        .subscribe((data:OfferByCompany)=>
        {
          this.offerByCompany=data;
          this.offerByCompany.companyInstance=this.registeredCompany;
          this.offerByCompany.offerInstance.beginDate = new Date(this.offerByCompany.offerInstance.beginDate.toString().split("T")[0]);
          this.offerByCompany.offerInstance.endDate = new Date(this.offerByCompany.offerInstance.endDate.toString().split("T")[0]);
        })
      );
      //setting form values
      this.offerAmount.setValue(this.offerByCompany.offerInstance.amount);
      this.offerBeginDate.setValue(this.convertDate(this.offerByCompany.offerInstance.beginDate));
      this.offerEndDate.setValue(this.convertDate(this.offerByCompany.offerInstance.endDate));

      this.offerByCompanyForm = this.fb.group({
        discount:this.offerAmount,
        beginDate:this.offerBeginDate,
        endDate:this.offerEndDate
      });
      this.subs.add(
        this.offerByCompanyForm.valueChanges
        .pipe(filter(data=>this.offerByCompanyForm.valid))
        .subscribe((data:{discount:number,beginDate:string,endDate:string})=>{
          this.offerByCompany.offerInstance.amount=data.discount;
          this.offerByCompany.offerInstance.beginDate=new Date(data.beginDate);
          this.offerByCompany.offerInstance.endDate = new Date(data.endDate);
        })
      );
  }
    ngOnDestroy(): void {
      this.subs.unsubscribe();
    }
    public saveOfferByComapny(){
      this.offerByCompanyController.changeOfferByCompany(this.offerByCompany)
      .subscribe(
        {
          next: (data)=>alert("Offer is successfully changed."),
          error:(error)=>alert(error.error.detail)
        }
      );
    }
    public convertDate(date:Date){
      let day:number = date.getDate();
      let month:number = date.getMonth()+1
      return date.getFullYear()+"-"+(month<10?"0"+month:month)+"-"+(day<9?"0"+day:day);
    }
}
