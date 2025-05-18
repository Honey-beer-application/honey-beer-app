import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOffersContentComponent } from './personal-offers-content.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonalOffersContentComponent', () => {
  let component: PersonalOffersContentComponent;
  let fixture: ComponentFixture<PersonalOffersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalOffersContentComponent],
      imports: [ReactiveFormsModule],
      providers: [
        provideHttpClient()
      ]
    });
    fixture = TestBed.createComponent(PersonalOffersContentComponent);
    TestBed.inject(OfferByCompanyController)
    TestBed.inject(CompanyController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
