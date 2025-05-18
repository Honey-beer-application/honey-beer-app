import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationComponent } from './new-reservation.component';
import { provideHttpClient } from '@angular/common/http';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import { ReactiveFormsModule } from '@angular/forms';

describe('NewReservationComponent', () => {
  let component: NewReservationComponent;
  let fixture: ComponentFixture<NewReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReservationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        provideHttpClient()
      ]
    });
    fixture = TestBed.createComponent(NewReservationComponent);
    TestBed.inject(ReservationController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
