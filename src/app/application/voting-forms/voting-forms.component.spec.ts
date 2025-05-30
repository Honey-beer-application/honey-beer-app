import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingFormsComponent } from './voting-forms.component';
import { provideHttpClient } from '@angular/common/http';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import { Event } from 'src/app/Data/Classes/Event';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { of } from 'rxjs';
import { VotingFormsCardComponent } from './voting-forms-card/voting-forms-card.component';

describe('VotingFormsComponent', () => {
  let component: VotingFormsComponent;
  let fixture: ComponentFixture<VotingFormsComponent>;
  let eventsToBeReturned: IEvent[] = [new Event()];
  let eventControllerSpyObj: jasmine.SpyObj<EventController>;

  beforeEach(() => {
    eventControllerSpyObj =jasmine.createSpyObj('EventController',['loadAllEvents']);
    TestBed.configureTestingModule({
      declarations: [VotingFormsComponent, VotingFormsCardComponent],
      providers: [provideHttpClient(), {provide: EventController, useValue: eventControllerSpyObj}]
    });
    eventControllerSpyObj = TestBed.inject(EventController) as jasmine.SpyObj<EventController>;
    eventControllerSpyObj.loadAllEvents.and.returnValue(of(eventsToBeReturned));
    fixture = TestBed.createComponent(VotingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return event list',()=>{
    let comp : VotingFormsComponent = new VotingFormsComponent(eventControllerSpyObj);
    expect(comp.surveys).toEqual(eventsToBeReturned);

  })
});
