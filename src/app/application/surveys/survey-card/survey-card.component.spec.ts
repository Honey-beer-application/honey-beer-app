import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCardComponent } from './survey-card.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SurveyComponent } from '../survey/survey.component';
import { Event } from 'src/app/Data/Classes/Event';

describe('SurveyCardComponent', () => {
  let component: SurveyCardComponent;
  let fixture: ComponentFixture<SurveyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyCardComponent],
      providers: [provideHttpClient()],
      imports: [RouterTestingModule.withRoutes([{path:'app/surveys/1', component: SurveyComponent}])]
    });
    fixture = TestBed.createComponent(SurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger redirectToSurvey procedure without throwing exception',()=>{
    expect(()=>component.redirectToSurvey(new Event({eventId:1n}))).not.toThrow();
  })
});
