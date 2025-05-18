import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfferComponent } from './update-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UpdateOfferComponent', () => {
  let component: UpdateOfferComponent;
  let fixture: ComponentFixture<UpdateOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateOfferComponent],
      imports:[RouterTestingModule,ReactiveFormsModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(UpdateOfferComponent);
    TestBed.inject(OfferByCompanyController);
    TestBed.inject(CompanyController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
