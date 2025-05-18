import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardComponent } from './offer-card.component';
import { provideHttpClient } from '@angular/common/http';
import OfferController from 'src/app/Data/Controllers/OfferController';

describe('OfferCardComponent', () => {
  let component: OfferCardComponent;
  let fixture: ComponentFixture<OfferCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferCardComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(OfferCardComponent)
    TestBed.inject(OfferController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
