import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationComponent } from './new-reservation.component';

describe('NewReservationComponent', () => {
  let component: NewReservationComponent;
  let fixture: ComponentFixture<NewReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReservationComponent]
    });
    fixture = TestBed.createComponent(NewReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
