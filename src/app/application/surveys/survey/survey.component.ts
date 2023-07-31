import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import {Event} from './../../../Data/Classes/Event';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnDestroy {

  public survey:IEvent;
  private subs:Subscription;
  public surveyForm:FormArray<any>;
  public answers:FormControl[];
  constructor(private surveyController:EventController,private fb:FormBuilder){
    this.subs = new Subscription();
    this.survey = new Event();
    this.surveyForm = new FormArray(<any>[]);
    this.answers = new Array<FormControl>();
    this.subs.add(
      this.surveyController.surveyToLoad.asObservable().subscribe((data:IEvent)=>{
        console.log(data);
        // console.log(JSON.stringify(data));
        this.survey=data;
      })
    );
    this.surveyForm=this.fb.array(
      this.survey.questions[1].answers
    );
    console.log(this.surveyForm);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}


