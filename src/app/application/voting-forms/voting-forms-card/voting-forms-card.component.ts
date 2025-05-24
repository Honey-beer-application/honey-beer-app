import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import { Event } from 'src/app/Data/Classes/Event';

@Component({
  selector: 'app-voting-forms-card',
  templateUrl: './voting-forms-card.component.html',
  styleUrls: ['./voting-forms-card.component.scss']
})
export class VotingFormsCardComponent {

  @Input('survey') survey:IEvent;

  constructor(private readonly router:Router,private readonly eventController:EventController){
    this.survey = new Event();
  }
  public redirectToSurvey(survey:IEvent):void{
    this.router.navigateByUrl(`app/surveys/${survey.eventId}`);
    this.eventController.surveyToLoad.next(survey);
  }
}
