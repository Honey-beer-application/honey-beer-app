import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import {Event} from './../../../Data/Classes/Event';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent{

  @Input('survey') survey:IEvent;

  constructor(private readonly router:Router,private readonly eventController:EventController){
    this.survey = new Event();
  }
  public redirectToSurvey(survey:IEvent):void{
    this.router.navigateByUrl(`app/surveys/${survey.eventId}`);
    this.eventController.surveyToLoad.next(survey);
  }
}
