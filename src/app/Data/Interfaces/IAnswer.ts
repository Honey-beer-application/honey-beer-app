import { FormControl } from "@angular/forms";

export interface IAnswer{
    eventId:bigint;
    questionId:bigint;
    answerId:bigint;
    value:string;
}