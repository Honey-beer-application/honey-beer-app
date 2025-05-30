import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationComponent } from './new-reservation.component';
import { provideHttpClient } from '@angular/common/http';
import { ReservationController } from 'src/app/Data/Controllers/ReservationController';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import Reservation from 'src/app/Data/Classes/Reservation';
import { Product } from 'src/app/Data/Classes/Product';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('NewReservationComponent', () => {
  let component: NewReservationComponent;
  let fixture: ComponentFixture<NewReservationComponent>;
  let reservationControllerSpyObj: jasmine.SpyObj<ReservationController>;

  beforeEach(() => {
    reservationControllerSpyObj = jasmine.createSpyObj('ReservationController', ['saveReservation']);
    TestBed.configureTestingModule({
      declarations: [NewReservationComponent],
      imports: [ReactiveFormsModule],
      providers: [
        provideHttpClient(),
        {provide: ReservationController, useValue: reservationControllerSpyObj}
      ]
    });
    reservationControllerSpyObj.productObservable = of(new Product());
    fixture = TestBed.createComponent(NewReservationComponent);
    TestBed.inject(ReservationController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run reservation with returned data', ()=>{
    reservationControllerSpyObj.saveReservation.and.returnValue(of(true));
    spyOn(window,'alert');
    component.reservation = new Reservation();
    component.saveReservation();
    expect(window.alert).toHaveBeenCalledWith('Reservation is successfully saved.');
  });

  it('should run reservation with error', ()=>{
    let exception : CustomError = new CustomError('date nodt returned');
    reservationControllerSpyObj.saveReservation.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    component.reservation = new Reservation();
    component.saveReservation();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });

  it('should validate form filtering on value change',()=>{
    let testingData: {amount: number, deliveryDate: string}[]=[
      {amount:5,deliveryDate: new Date().toLocaleDateString()}
    ]
    testingData.forEach((data:{amount: number, deliveryDate: string})=>{
      expect(()=>{
        component.reservationForm.setValue({
          amount: data.amount,
          deliveryDate: data.deliveryDate
        });
      }).not.toThrow();
    })
  });
  it('should convert date',()=>{
    expect(component.convertDate(new Date(2025,10,5))).toEqual('2025-11-05')
  })
});
