import { ApplicationRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map,BehaviorSubject, Subscription} from 'rxjs';
import CompanyController from './../../../Data/Controllers/CompanyController';
import {OfferByCompanyController} from './../../../Data/Controllers/OfferByCompanyController';
import IOfferByCompany from './../../../Data/Interfaces/IOfferByCompany';
import { Router } from '@angular/router';
import ICompany from 'src/app/Data/Interfaces/ICompany';


interface IData{
  beginDate:string | null,
  discount: number | null,
  endDate: string| null,
  productDescription:string| null,
  productName:string|null
}

@Component({
  selector: 'app-personal-offers-content',
  templateUrl: './personal-offers-content.component.html',
  styleUrls: ['./personal-offers-content.component.scss']
})
export class PersonalOffersContentComponent implements OnDestroy {
  private observable:BehaviorSubject<IOfferByCompany[]> = new BehaviorSubject(new Array<IOfferByCompany>());
  public offerByCompanyList:IOfferByCompany[] = [];

  private subs:Subscription = new Subscription();
  private registeredCompany!:ICompany;
  public offersFG!:FormGroup;
  private discount!:FormControl;
  private offerBeginDate!:FormControl;
  private offerEndDate!:FormControl;
  private productName!:FormControl;
  private productDescription!:FormControl;

  constructor(public offerByCompanyController:OfferByCompanyController,
              private companyController:CompanyController, 
              private fb:FormBuilder,
              private router:Router){
    this.subs.add(
      CompanyController.companyObservable.subscribe(
        (data:ICompany)=>this.registeredCompany=data
      )
    )
    this.subs.add(
      this.offerByCompanyController.loadAllOffersByCompany(this.registeredCompany)
      .pipe(map(list=>
        {
          list.map(item=>{
            item.offerInstance.beginDate = new Date(item.offerInstance.beginDate.toString().split('T')[0]);
            item.offerInstance.endDate = new Date(item.offerInstance.endDate.toString().split('T')[0]);
            item.companyInstance=this.registeredCompany;
          });
        return list;
        }))
      .subscribe(
        (data:IOfferByCompany[])=>{this.observable=new BehaviorSubject(data);this.offerByCompanyList=data;},
        (error)=>alert(error.error.detail)
      )
    )

    this.offersFG = this.fb.group({
      "discount":this.discount,
      "beginDate":this.offerBeginDate,
      "endDate":this.offerEndDate,
      "productName":this.productName,
      "productDescription":this.productDescription
    });
    this.offersFG.valueChanges
    .subscribe((data:IData)=>{
      this.selectData(data);
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private selectData(select:IData):void{
    this.observable
    .subscribe((data:IOfferByCompany[])=>{
      this.offerByCompanyList = data;
      if(select.discount!=null&&select.discount!=0)
      this.offerByCompanyList =this.offerByCompanyList.filter((item:IOfferByCompany)=>item.offerInstance.amount==select.discount);
      if(select.beginDate!=null&&select.beginDate!="")
      this.offerByCompanyList =this.offerByCompanyList.filter((item:IOfferByCompany)=> item.offerInstance.beginDate.toISOString()==new Date(String(select.beginDate)).toISOString());
      if(select.endDate!=null&&select.endDate!="")
      this.offerByCompanyList =this.offerByCompanyList.filter((item:IOfferByCompany)=>item.offerInstance.endDate.toISOString()==new Date(String(select.endDate)).toISOString());
      if(select.productName!=null)
      this.offerByCompanyList = this.offerByCompanyList.filter((item:IOfferByCompany)=>item.offerInstance.productInstance?.name.includes(String(select.productName)));
      if(select.productDescription!=null)
      this.offerByCompanyList = this.offerByCompanyList.filter((item:IOfferByCompany)=>item.offerInstance.productInstance?.description.includes(String(select.productDescription)));
    })
  }
  public saveOfferByCompanyToLoad(data:IOfferByCompany){
    this.offerByCompanyController.setOfferByCompanyToLoad(data);

  }
  public redirectToEdit(offerBC:IOfferByCompany):void{
    this.router.navigate([`/app/personal_offers/${offerBC.offerId}/edit`]);
    this.saveOfferByCompanyToLoad(offerBC);
  }
  public convertDate(date:Date):string{
    return date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  }
}
