import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';
import { provideHttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventController } from 'src/app/Data/Controllers/EventController';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { Event } from 'src/app/Data/Classes/Event';
import { Question } from 'src/app/Data/Classes/Question';
import { Answer } from 'src/app/Data/Classes/Answer';
import { QuestionType } from 'src/app/Data/Classes/QuestionType';
import { IEvent } from 'src/app/Data/Interfaces/IEvent';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  let surveyControllerSpyObj: jasmine.SpyObj<EventController>;

  beforeEach(() => {
    surveyControllerSpyObj = jasmine.createSpyObj('EventController',['saveEventForm']);
    TestBed.configureTestingModule({
      declarations: [SurveyComponent],
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(),{provide: EventController, useValue: surveyControllerSpyObj}]
    });
    surveyControllerSpyObj = TestBed.inject(EventController) as jasmine.SpyObj<EventController>;
    surveyControllerSpyObj.saveEventForm.and.returnValue(of(true));
    surveyControllerSpyObj.surveyToLoad = new BehaviorSubject<IEvent>(new Event({questions:[
      new Question({text:"Question 1",answers:[new Answer({value:"Answer 1"})],questionTypeInstance: new QuestionType({name:"Text"})}),
      new Question({text:"Question 2",answers:[new Answer({value:"Answer 2"})],questionTypeInstance: new QuestionType({name:"Single choice"})}),
      new Question({text:"Question 2",answers:[new Answer({value:"Answer 3"}),new Answer({value:"Answer 4"})],questionTypeInstance: new QuestionType({name:"Multiple choice"})})
    ]}));
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should execute ngOnInit wihtout error',()=>{
    expect(()=>component.ngOnInit()).not.toThrow();
  });
  it('shoud validate form',()=>{
    component.surveyForm.controls.questions.controls.forEach((control:FormGroup<{question:FormControl<string>,questionType:FormControl<string>,answers:any}>)=>{
      if((control.controls).questionType.value== 'Text')
        (control.controls.answers as FormArray<FormGroup<{label: FormControl<string>,value:FormControl<string>}>>).controls[0].controls.value.setValue("s");
      if(control.controls.questionType.value == 'Single choice')
        (control.controls.answers as FormArray<FormGroup<{value: FormControl<string>}>>).controls[0].controls.value.setValue("s");
    });
    expect(()=>component.saveAnswers()).not.toThrow();
  });
  it('shoud not validate form',()=>{
    expect(()=>component.saveAnswers()).not.toThrow();
  });
  it('shoud validate form without saving results',()=>{
    component.surveyForm.controls.questions.controls.forEach((control:FormGroup<{question:FormControl<string>,questionType:FormControl<string>,answers:any}>)=>{
      if((control.controls).questionType.value== 'Text')
        (control.controls.answers as FormArray<FormGroup<{label: FormControl<string>,value:FormControl<string>}>>).controls[0].controls.value.setValue("s");
      if(control.controls.questionType.value == 'Single choice')
        (control.controls.answers as FormArray<FormGroup<{value: FormControl<string>}>>).controls[0].controls.value.setValue("s");
    });
    let exception: CustomError = new CustomError('Saving form went wrong');
    surveyControllerSpyObj.saveEventForm.and.returnValue(throwError(()=>exception))
    spyOn(window,'alert');
    expect(()=>component.saveAnswers()).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
});
