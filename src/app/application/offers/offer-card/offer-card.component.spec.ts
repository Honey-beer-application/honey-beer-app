import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardComponent } from './offer-card.component';
import { provideHttpClient } from '@angular/common/http';
import OfferController from 'src/app/Data/Controllers/OfferController';
import Offer from 'src/app/Data/Classes/Offer';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateOfferComponent } from '../create-offer/create-offer.component';

describe('OfferCardComponent', () => {
  let component: OfferCardComponent;
  let fixture: ComponentFixture<OfferCardComponent>;
  let offerId: bigint = 1n;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferCardComponent],
      providers: [provideHttpClient()],
      imports: [RouterTestingModule.withRoutes([{path: 'app/offers/'+offerId+'/create',component: CreateOfferComponent}])]
    });
    fixture = TestBed.createComponent(OfferCardComponent)
    TestBed.inject(OfferController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be redirected to creating personal offer wihtout throwing error',()=>{
    expect(()=>component.redirectToPersonalOffer(new Offer({offerId:offerId}))).not.toThrow();
  })
});
