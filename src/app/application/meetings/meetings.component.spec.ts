import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsComponent } from './meetings.component';
import { provideHttpClient } from '@angular/common/http';

describe('MeetingsComponent', () => {
  let component: MeetingsComponent;
  let fixture: ComponentFixture<MeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingsComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(MeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
