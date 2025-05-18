import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfferComponent } from './create-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { OfferByCompanyController } from 'src/app/Data/Controllers/OfferByCompanyController';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateOfferComponent', () => {
  let component: CreateOfferComponent;
  let fixture: ComponentFixture<CreateOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOfferComponent],
      imports: [ReactiveFormsModule],
      providers: [
                // ... other test providers
                provideHttpClient(),
            ],
    });
    TestBed.inject(OfferByCompanyController)
    fixture = TestBed.createComponent(CreateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
