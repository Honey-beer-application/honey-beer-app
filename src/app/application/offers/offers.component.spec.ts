import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersComponent } from './offers.component';
import { provideHttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import OfferController from 'src/app/Data/Controllers/OfferController';
import Offer from 'src/app/Data/Classes/Offer';
import { of, throwError } from 'rxjs';
import { OfferCardComponent } from './offer-card/offer-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';
import IData from 'src/app/Data/Interfaces/IData';
import { Product } from 'src/app/Data/Classes/Product';

describe('OffersComponent', () => {
  let component: OffersComponent;
  let fixture: ComponentFixture<OffersComponent>;
  let offerControllerSpyObj: jasmine.SpyObj<OfferController>;
  let formBuilder: FormBuilder;
  let offers: Array<Offer> = [
    new Offer({productId:1n, amount: 5, beginDate: new Date(Date.now()), endDate: new Date(),offerId:1n,productInstance: new Product()}),
    new Offer({productId:2n, amount: 10, beginDate: new Date(Date.now()), endDate: new Date(),offerId:1n,productInstance: new Product()})
  ];

  beforeEach(() => {
    jasmine.clock().mockDate(new Date());
    offerControllerSpyObj = jasmine.createSpyObj('OfferController',['loadAllOffers']);
    TestBed.configureTestingModule({
      declarations: [OffersComponent, OfferCardComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: OfferController, useValue: offerControllerSpyObj}, FormBuilder]
    });
    offerControllerSpyObj = TestBed.inject(OfferController) as jasmine.SpyObj<OfferController>;
    formBuilder = TestBed.inject(FormBuilder);
    offerControllerSpyObj.loadAllOffers.and.returnValue(of(offers));
    fixture = TestBed.createComponent(OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be instantiated',()=>{
    expect(()=>new OffersComponent(offerControllerSpyObj, formBuilder)).not.toThrow();
  });

  it('should be instantiated with thrown error', ()=>{
    let error: CustomError = new CustomError("Call to API wasn't successful");
    offerControllerSpyObj.loadAllOffers.and.returnValue(throwError(()=>error));
    spyOn(window, 'alert');
    expect(()=>new OffersComponent(offerControllerSpyObj, formBuilder)).not.toThrow();
  });

  it('should test converting date to string',()=>{
    let date:Date = new Date();
    expect(component.convertDate(date)).toEqual(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear());
  });
  it('should filter for offers',()=>{
    let data: IData[] = [
      {productName: null,productDescription: null, beginDate: null, endDate: null, discount:5},
      {productName: null,productDescription: null, beginDate: null, endDate: new Date().toISOString(), discount:0},
      {productName: null,productDescription: null, beginDate: new Date().toISOString(), endDate: null, discount:0},
      {productName: null,productDescription: "Description 1", beginDate: null, endDate: null, discount:0},
      {productName: "product1",productDescription: null, beginDate: null, endDate: null, discount:0},
      {productName: null,productDescription: null, beginDate: null, endDate: null, discount:null},
      {productName: null,productDescription: null, beginDate: null, endDate: '', discount: null},
      {productName: null,productDescription: null, beginDate: '', endDate: null, discount: null}
    ];
    data.forEach(data=>{
      expect(()=>{
        let comp = new OffersComponent(offerControllerSpyObj, formBuilder);
        comp.offersFG.setValue(data);
      }).not.toThrow();
    })

  })

});
