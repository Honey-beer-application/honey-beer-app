import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferComponent } from './create-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import OfferController from 'src/app/Data/Controllers/OfferController';
import CompanyController from 'src/app/Data/Controllers/CompanyController';

describe('CreateOfferComponent', () => {
  let component: CreateOfferComponent;
  let fixture: ComponentFixture<CreateOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOfferComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(CreateOfferComponent);
    TestBed.inject(OfferController);
    TestBed.inject(CompanyController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
