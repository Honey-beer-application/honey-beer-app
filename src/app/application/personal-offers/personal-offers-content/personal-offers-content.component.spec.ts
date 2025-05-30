import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOffersContentComponent } from './personal-offers-content.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import OfferByCompany from 'src/app/Data/Classes/OfferByCompany';
import { Router, ɵEmptyOutletComponent } from '@angular/router';
import { Product } from 'src/app/Data/Classes/Product';
import { RouterTestingModule } from '@angular/router/testing';
import { UpdateOfferComponent } from '../update-offer/update-offer.component';

describe('PersonalOffersContentComponent', () => {
  let component: PersonalOffersContentComponent;
  let fixture: ComponentFixture<PersonalOffersContentComponent>;
  let offerByCmopanyControllerSpyObj: jasmine.SpyObj<OfferByCompanyController>;

  beforeEach(() => {
    offerByCmopanyControllerSpyObj = jasmine.createSpyObj('OfferByCompanyController',['loadAllOffersByCompany','setOfferByCompanyToLoad']);
    TestBed.configureTestingModule({
      declarations: [PersonalOffersContentComponent,],
      imports: [ReactiveFormsModule,ɵEmptyOutletComponent, RouterTestingModule.withRoutes([{path:'app/personal_offers/:id/edit',component: UpdateOfferComponent}])],
      providers: [provideHttpClient(),{provide: OfferByCompanyController, useValue: offerByCmopanyControllerSpyObj}, CompanyController,FormBuilder,Router]
    });
    offerByCmopanyControllerSpyObj = TestBed.inject(OfferByCompanyController) as jasmine.SpyObj<OfferByCompanyController>;
    offerByCmopanyControllerSpyObj.loadAllOffersByCompany.and.returnValue(of([ new OfferByCompany({offerInstance:{
      beginDate: new Date(),
      productInstance: new Product({ description: "Description", name: "Name" }),
      endDate: new Date(),
      productId: 1n,
      offerId: 1n,
      amount: 20
    }}), new OfferByCompany({offerInstance:{
      beginDate: new Date(),
      productInstance: new Product({ description: "Description 1", name: "Name 1" }),
      endDate: new Date(),
      productId: 2n,
      offerId: 2n,
      amount: 30
    }})]));
    fixture = TestBed.createComponent(PersonalOffersContentComponent);
    offerByCmopanyControllerSpyObj = TestBed.inject(OfferByCompanyController) as jasmine.SpyObj<OfferByCompanyController>;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form',()=>{
    expect(()=>{
      component.offersFG.setValue({
        beginDate:new Date().toISOString(),
        discount: 20,
        endDate: new Date().toISOString(),
        productDescription: "Description",
        productName:"Name"
      });
    }).not.toThrow();
  });
  it('should save company',()=>{
    offerByCmopanyControllerSpyObj.setOfferByCompanyToLoad.and.callThrough();
    expect(()=>component.saveOfferByCompanyToLoad(new OfferByCompany())).not.toThrow();
  });
  it('should redirect to edit personal offer',()=>{
    spyOn(component,'saveOfferByCompanyToLoad').and.callThrough();
    expect(()=>component.redirectToEdit(new OfferByCompany({offerId:1n}))).not.toThrow()
  });
});
