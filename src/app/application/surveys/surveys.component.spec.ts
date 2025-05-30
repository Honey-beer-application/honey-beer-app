import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysComponent } from './surveys.component';
import { provideHttpClient } from '@angular/common/http';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { of } from 'rxjs';
import { Event } from 'src/app/Data/Classes/Event';
import { SurveyCardComponent } from './survey-card/survey-card.component';

describe('SurveysComponent', () => {
  let component: SurveysComponent;
  let fixture: ComponentFixture<SurveysComponent>;
  let eventControllerSpyObj: jasmine.SpyObj<EventController>;

  beforeEach(() => {
    eventControllerSpyObj = jasmine.createSpyObj('EventController',['loadAllEvents']);
    TestBed.configureTestingModule({
      declarations: [SurveysComponent,SurveyCardComponent],
      providers: [provideHttpClient(), {provide: EventController, useValue: eventControllerSpyObj}]
    });
    eventControllerSpyObj.loadAllEvents.and.returnValue(of([new Event(), new Event()]));
    TestBed.inject(EventController);
    fixture = TestBed.createComponent(SurveysComponent);
    TestBed.inject(EventController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
