import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsComponent } from './meetings.component';
import { provideHttpClient } from '@angular/common/http';
import { MeetingConroller } from 'src/app/Data/Controllers/MeetingController';
import { of, throwError } from 'rxjs';
import { Meeting } from 'src/app/Data/Classes/Meeting';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('MeetingsComponent', () => {
  let component: MeetingsComponent;
  let fixture: ComponentFixture<MeetingsComponent>;
  let meetingControllerSpyObj: jasmine.SpyObj<MeetingConroller>;

  beforeEach(() => {
    meetingControllerSpyObj = jasmine.createSpyObj('MeetingController',['loadAllMeetings','scheduleMeeting']);
    TestBed.configureTestingModule({
      declarations: [MeetingsComponent],
      providers: [provideHttpClient(),{provide: MeetingConroller, useValue: meetingControllerSpyObj}]
    });
    meetingControllerSpyObj = TestBed.inject(MeetingConroller) as jasmine.SpyObj<MeetingConroller>;
    meetingControllerSpyObj.loadAllMeetings.and.returnValue(of([new Meeting(), new Meeting()]));
    fixture = TestBed.createComponent(MeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get date',()=>{
    let example: Date = new Date(2025,10,5);
    expect(component.getDate(example)).toEqual("5.11.2025.");
  });
  it('should get time',()=>{
    let example: Date = new Date(2025, 10, 5, 5, 5, 5, 0);
    expect(component.getTime(example)).toEqual("5:05");
    let example1: Date = new Date(2025, 10, 5, 5, 10, 5, 0);
    expect(component.getTime(example1)).toEqual("5:10")
  });
  it('should schedule meeting',()=>{
    meetingControllerSpyObj.scheduleMeeting.and.returnValue(of(true));
    spyOn(window,'alert');
    expect(()=>component.scheduleMeting(new Meeting({pib: 1000001n}))).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith('Meeting is scheduled successfully.');
  });
  it('should not schedule meeting',()=>{
    let exception: CustomError = new CustomError('Date not returned');
    meetingControllerSpyObj.scheduleMeeting.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>component.scheduleMeting(new Meeting({pib: 1000001n}))).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  })
});
