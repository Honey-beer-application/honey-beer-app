import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysComponent } from './surveys.component';
import { provideHttpClient } from '@angular/common/http';
import { EventController } from 'src/app/Data/Controllers/EventController';

describe('SurveysComponent', () => {
  let component: SurveysComponent;
  let fixture: ComponentFixture<SurveysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveysComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(SurveysComponent);
    TestBed.inject(EventController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
