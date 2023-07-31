import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys.component';
import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveyCardComponent } from './survey-card/survey-card.component';



@NgModule({
  declarations: [
    SurveysComponent,
    SurveyCardComponent
  ],
  imports: [
    CommonModule,
    SurveysRoutingModule
  ]
})
export class SurveysModule { }
