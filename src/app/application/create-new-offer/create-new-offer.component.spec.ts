import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewOfferComponent } from './create-new-offer.component';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateNewOfferComponent', () => {
  let component: CreateNewOfferComponent;
  let fixture: ComponentFixture<CreateNewOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewOfferComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(CreateNewOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
