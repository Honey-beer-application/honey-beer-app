import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import Company from 'src/app/Data/Classes/Company';
import Offer from 'src/app/Data/Classes/Offer';
import OfferByCompany from 'src/app/Data/Classes/OfferByCompany';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import OfferController from 'src/app/Data/Controllers/OfferController';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import IOffer from 'src/app/Data/Interfaces/IOffer';
import IOfferByCompany from 'src/app/Data/Interfaces/IOfferByCompany';
import IProduct from 'src/app/Data/Interfaces/IProduct';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnDestroy {

  private readonly subs:Subscription = new Subscription();
  public offer:IOffer;
  private company:ICompany;

  public offerByCompanyForm!:FormGroup;
  public offerAmount:FormControl;
  public offerBeginDate:FormControl;
  public offerEndDate:FormControl;
  constructor(private readonly fb:FormBuilder,private readonly offerController:OfferController, private readonly companyController:CompanyController){
    this.offer = new Offer();
    this.company = new Company();
    this.subs.add(
      ProductController.productToLoadObservable.subscribe((data:IProduct)=>{
        this.offer.productInstance = data;
      })
    );
    this.subs.add(
      this.companyController.companyObservable.subscribe((data:ICompany)=>{
        this.company=data;
      })
    );

    this.offerAmount = new FormControl(this.offer.amount,[Validators.required,Validators.min(0)]);
    this.offerBeginDate = new FormControl(this.offer.beginDate.toLocaleDateString(),Validators.required);
    this.offerEndDate = new FormControl(this.offer.endDate.toLocaleDateString(),Validators.required)
    this.offerByCompanyForm = this.fb.group({
      discount:this.offerAmount,
      beginDate:this.offerBeginDate,
      endDate:this.offerEndDate
    });
    this.subs.add(
      this.offerByCompanyForm.valueChanges
      .pipe(filter(data=>this.offerByCompanyForm.valid))
      .subscribe((data:{discount:number,beginDate:any,endDate:any})=>{
        this.offer.amount=data.discount;
        this.offer.beginDate = new Date(data.beginDate);
        this.offer.endDate = new Date(data.endDate);
      })
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public saveOffer():void{
    let offerByCompany:IOfferByCompany= new OfferByCompany();
    offerByCompany.companyInstance=this.company;
    offerByCompany.pib=this.company.PIB;
    offerByCompany.productId=this.offer.productInstance==undefined?0n:this.offer.productInstance.productId;
    offerByCompany.offerInstance=this.offer;
    this.offerController.saveOffer(offerByCompany).subscribe(
      {next:(data)=>alert("Offer is successfully saved."),
      error:(error)=>alert(error.error.detail)})
    // this.subs.add(
      
    // )
  }
  public convertDate(date:Date):string{
    let month:number = date.getMonth()+1;
    let day:number = date.getDate();
    return date.getFullYear()+"-"+(month<10?'0'+month:month)+"-"+(day<10?'0'+day:day);
  }
}
