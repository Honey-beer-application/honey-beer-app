import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCardComponent } from './survey-card.component';
import { provideHttpClient } from '@angular/common/http';

describe('SurveyCardComponent', () => {
  let component: SurveyCardComponent;
  let fixture: ComponentFixture<SurveyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyCardComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(SurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
