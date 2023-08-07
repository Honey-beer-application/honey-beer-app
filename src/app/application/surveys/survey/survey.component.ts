import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import {Event} from './../../../Data/Classes/Event';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/Data/Interfaces/IQuestion';
import {Question} from 'src/app/Data/Classes/Question';
import { IAnswer } from 'src/app/Data/Interfaces/IAnswer';
import { Answer } from 'src/app/Data/Classes/Answer';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit,OnDestroy {

  public survey:IEvent;
  private subs:Subscription;
  public surveyForm:FormGroup<{questions:FormArray<FormGroup>}>;
  public answers:FormControl[];
  constructor(private surveyController:EventController,private fb:FormBuilder,private eventController:EventController){
    this.subs = new Subscription();
    this.survey = new Event();
    this.surveyForm = new FormGroup({questions:new FormArray(new Array<FormGroup>())});
    this.answers = new Array<FormControl>();
    this.subs.add(
      this.surveyController.surveyToLoad.asObservable().subscribe((data:IEvent)=>{
        this.survey=data;
      })
    );
  }
  ngOnInit(): void {
    //forming local variable questions to declare an array
    let questions:Array<FormGroup>=new Array<FormGroup>();
    //iteration trough questions
    this.survey.questions.map((question:IQuestion)=>{
      let radioAnswers:Array<FormGroup> = [];
      let answers:Array<FormGroup> = [];
        question.answers.map((answer:IAnswer)=>{
          //creating answer value and label in question
          if(question.questionTypeInstance.name=="Text")
          answers.push(new FormGroup({
            label:new FormControl(answer.value),
            value:new FormControl("",Validators.required)
          }));
          else if(question.questionTypeInstance.name=="Single choice")
          {
            radioAnswers.push(new FormGroup({
              value:new FormControl(answer.value)
            }));
          }
          else
          answers.push(new FormGroup({
            label:new FormControl(answer.value),
            value:new FormControl(false)
          }));
        });
        //adding option value picker for single choice answers
        if(question.questionTypeInstance.name=="Single choice")
          answers.push(new FormGroup({
            labels:new FormArray(radioAnswers),
            value:new FormControl("",Validators.required)
        }));
      //adding answers and forming questions
      questions.push(new FormGroup({
        questionType:new FormControl(question.questionTypeInstance.name),
        questionName:new FormControl(question.text),
        answers:new FormArray<FormGroup>(answers,pickValidator(question.questionTypeInstance.name))
      }));
    });
    //forming surveyForm
    this.surveyForm = new FormGroup({
      questions:new FormArray<FormGroup>(questions)
    });


  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  get questions():Array<FormGroup>{
    return this.surveyForm.controls.questions.controls as Array<FormGroup>;
  }
  public returnAnswersArray(question:FormGroup):Array<FormGroup>{
    return (<FormArray>question.controls["answers"]).controls as Array<FormGroup>
  }
  public returnLabelsArray(question:FormGroup):Array<FormGroup>{
    return (<FormArray>question.controls["labels"]).controls as Array<FormGroup>;
  }
  public saveAnswers(){
    if(this.surveyForm.valid){
      this.surveyForm.value.questions?.forEach((question:any,i:number)=>{
        if(question.questionType=="Single choice"){
          let answer:IAnswer = new Answer();
          answer = (this.survey.questions[i].answers.filter(a=>a.value==question.answers[0].value))[0];
          this.survey.questions[i].answers = new Array<IAnswer>();
          this.survey.questions[i].answers.push(answer)
        }
        else
        { 
          question.answers.forEach((answer:any,j:number)=>{
            this.survey.questions[i].answers[j].value=answer.value;
          });
          if(question.questionType!="Text"){
            this.survey.questions[i].answers=this.survey.questions[i].answers.filter(a=>a.value.toString()==true.toString());
          }
        }
      });
      this.subs.add(
        this.eventController.saveEventForm(this.survey).subscribe((data)=>alert("Form is successfully submitted."),(error)=>alert(JSON.stringify(error)))
      );
    }else{
      alert("Values are not entered correctly.");
    }
  }
}
export function customValidateFormArray(): ValidatorFn {
  return (formArray:AbstractControl<any,any>):{[key: string]: any} | null=>{
    let numberOfValidFields:number=0;
    (<FormArray<FormGroup>>formArray).controls.forEach((x:FormGroup)=>{
        if(x.value.value==true) numberOfValidFields++; 
    })
    return numberOfValidFields>=2?null:{error:'At least 2 options must be selected.'};
  }
}
export function pickValidator(questionType:string):ValidatorFn{
  switch(questionType){
    case "Multiple choice":
      return customValidateFormArray();
    default:
      return returnDefaultFuntion();
  }
}
function returnDefaultFuntion():ValidatorFn{
  return (formArray:AbstractControl<any,any>):{[key: string]: any} | null=>null;
}

