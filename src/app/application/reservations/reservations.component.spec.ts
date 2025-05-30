import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsComponent } from './reservations.component';
import { provideHttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import { of } from 'rxjs';
import Reservation from 'src/app/Data/Classes/Reservation';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';

describe('ReservationsComponent', () => {
  let component: ReservationsComponent;
  let fixture: ComponentFixture<ReservationsComponent>;
  let reservationControllerSpyObj: jasmine.SpyObj<ReservationController>;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    reservationControllerSpyObj = jasmine.createSpyObj('ReservationController',['loadAllReservations']);
    TestBed.configureTestingModule({
      declarations: [ReservationsComponent, ReservationCardComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: ReservationController, useValue: reservationControllerSpyObj}, FormBuilder]
    });
    reservationControllerSpyObj.loadAllReservations.and.returnValue(of([new Reservation({}), new Reservation()]));
    reservationControllerSpyObj = TestBed.inject(ReservationController) as jasmine.SpyObj<ReservationController>;
    formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(ReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate form',()=>{
    let filters:{amount:number, delivery: string}[]=[
      {amount:2,delivery: new Date().toISOString()},
      {amount:0,delivery: new Date().toISOString()},
      {amount:2,delivery: ''},
    ];

    let comp = new ReservationsComponent(reservationControllerSpyObj, formBuilder);

    filters.forEach((filter:{amount: number, delivery: string})=>{
      expect(()=>{    
        comp.reservationForm.setValue({
          amount: filter.amount,
          delivery: filter.delivery
        });
      }).not.toThrow();
    })
  })
});
