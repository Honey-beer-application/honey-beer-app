import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsComponent } from './promotions.component';
import { provideHttpClient } from '@angular/common/http';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { of, throwError } from 'rxjs';
import { Event } from 'src/app/Data/Classes/Event';
import { PromotionCardComponent } from './promotion-card/promotion-card.component';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('PromotionsComponent', () => {
  let component: PromotionsComponent;
  let fixture: ComponentFixture<PromotionsComponent>;
  let eventControllerSpyObj: jasmine.SpyObj<EventController>;

  beforeEach(() => {
    eventControllerSpyObj = jasmine.createSpyObj('EventController', ['loadAllPromotions']);
    TestBed.configureTestingModule({
      declarations: [PromotionsComponent, PromotionCardComponent],
      providers: [
          provideHttpClient(),
          {provide: EventController, useValue: eventControllerSpyObj}
      ],
    });
    eventControllerSpyObj.loadAllPromotions.and.returnValue(of([new Event(), new Event()]))
    TestBed.inject(EventController);
    fixture = TestBed.createComponent(PromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should run constructor with error', ()=>{
    let exception: CustomError = new CustomError('Object are not returned');
    eventControllerSpyObj.loadAllPromotions.and.returnValue(throwError(()=>exception))
    spyOn(window,'alert');
    expect(()=>new PromotionsComponent(eventControllerSpyObj)).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
});
