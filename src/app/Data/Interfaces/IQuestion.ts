import { IAnswer } from "./IAnswer";
import { IQuestionType } from "./IQuestionType";

export interface IQuestion{
    eventId:bigint;
    questionId:bigint;
    text:string|null;
    questionTypeId:bigint;
    questionTypeInstance:IQuestionType;
    answers:IAnswer[];
}