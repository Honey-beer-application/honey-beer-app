import { FormControl } from "@angular/forms";

export interface IAnswer{
    formControl: FormControl;
    eventId:bigint;
    questionId:bigint;
    answerId:bigint;
    value:string;
}