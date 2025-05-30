import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionCardComponent } from './promotion-card.component';
import { provideHttpClient } from '@angular/common/http';
import { Event } from 'src/app/Data/Classes/Event';
import { RouterTestingModule } from '@angular/router/testing';
import { SurveyComponent } from '../../surveys/survey/survey.component';

describe('PromotionCardComponent', () => {
  let component: PromotionCardComponent;
  let fixture: ComponentFixture<PromotionCardComponent>;
  let eventId: bigint = 1n;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionCardComponent],
      providers: [provideHttpClient()],
      imports: [RouterTestingModule.withRoutes([{path:'app/promotions/'+eventId, component: SurveyComponent}])]
    });
    fixture = TestBed.createComponent(PromotionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger redirectToPromotion without exception',()=>{
    expect(()=>component.redirectToPromotion(new Event({eventId:eventId}))).not.toThrow();
  })
});
