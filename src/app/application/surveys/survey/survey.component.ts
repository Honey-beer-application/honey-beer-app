import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import {Event} from './../../../Data/Classes/Event';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/Data/Interfaces/IQuestion';
import { IAnswer } from 'src/app/Data/Interfaces/IAnswer';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit,OnDestroy {

  public survey:IEvent;
  private readonly subs:Subscription;
  public surveyForm:FormGroup<{questions:FormArray<FormGroup>}>;
  public answers:FormControl[];
  constructor(private readonly surveyController:EventController){
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
    this.survey.questions.forEach((question:IQuestion)=>{
      let radioAnswers:Array<FormGroup> = [];
      let answers:Array<FormGroup> = [];
        question.answers.forEach((answer:IAnswer)=>{
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
        questionType:new FormControl(question.questionTypeInstance.name,[]),
        questionName:new FormControl(question.text,[]),
        answers:new FormArray<FormGroup>(answers,[pickValidator(question.questionTypeInstance.name)])
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
    return this.surveyForm.controls.questions.controls;
  }
  public returnAnswersArray(question:FormGroup):Array<FormGroup>{
    return (<FormArray>question.controls["answers"]).controls as Array<FormGroup>
  }
  public returnLabelsArray(question:FormGroup):Array<FormGroup>{
    return (<FormArray>question.controls["labels"]).controls as Array<FormGroup>;
  }
  public saveAnswers(){
    if(this.surveyForm.valid){
      this.surveyForm.controls.questions.controls.forEach((question:FormGroup<any>, i:number)=>{
        if(question.get('questionType')?.value=="Single choice"){
          let answer:IAnswer | undefined;
          answer = (question.get("answers")!.value)[0];
          this.survey.questions[i].answers = new Array<IAnswer>();
          this.survey.questions[i].answers.push(answer!);
        }
        else
        { 
          question.get('answers')?.value.forEach((answer:any,j:number)=>{
            this.survey.questions[i].answers[j].value=answer.value;
          });
          if(question.get('questionType')?.value!="Text"){
            this.survey.questions[i].answers=this.survey.questions[i].answers.filter(a=>a.value.toString()==true.toString());
          }
        }
      });
      this.subs.add(
        this.surveyController.saveEventForm(this.survey).subscribe({next:(data)=>alert("Form is successfully submitted."),error:(error)=>alert(error.error.detail)})
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
        if(x.valid===true) numberOfValidFields++; 
    })
    return numberOfValidFields>=2?null:{error:'At least 2 options must be selected.'};
  }
}
export function pickValidator(questionType:string):ValidatorFn{
  if(questionType=== "Multiple choice")
      return customValidateFormArray();
    else
      return returnDefaultFuntion();
}
function returnDefaultFuntion():ValidatorFn{
  return (formArray:AbstractControl<any,any>):{[key: string]: any} | null=>null;
}

