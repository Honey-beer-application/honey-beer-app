import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingFormsCardComponent } from './voting-forms-card.component';
import { provideHttpClient } from '@angular/common/http';
import { Event } from 'src/app/Data/Classes/Event';
import { RouterTestingModule } from '@angular/router/testing';
import { SurveyComponent } from '../../surveys/survey/survey.component';

describe('VotingFormsCardComponent', () => {
  let component: VotingFormsCardComponent;
  let fixture: ComponentFixture<VotingFormsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingFormsCardComponent],
      providers: [provideHttpClient()],
      imports: [RouterTestingModule.withRoutes([{path:'app/surveys/1', component:SurveyComponent}])]
    });
    fixture = TestBed.createComponent(VotingFormsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should throw no exception on reiggering redirectToSurvey',()=>{
    expect(()=>component.redirectToSurvey(new Event({eventId:1n}))).not.toThrow();
  })
});
