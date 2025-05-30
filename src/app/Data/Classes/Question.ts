import { IAnswer } from "../Interfaces/IAnswer";
import { IQuestion } from "../Interfaces/IQuestion";
import { IQuestionType } from "../Interfaces/IQuestionType";
import { Answer } from "./Answer";
import { QuestionType } from "./QuestionType";

export class Question implements IQuestion{
    private _eventId: bigint;
    private _questionId: bigint;
    private _text: string | null;
    private _questionTypeId: bigint;
    private _questionTypeInstance: IQuestionType;
    private _answers: IAnswer[];
    public get eventId(): bigint {
        return this._eventId;
    }
    public set eventId(value: bigint) {
        this._eventId = value;
    }
    public get questionId(): bigint {
        return this._questionId;
    }
    public set questionId(value: bigint) {
        this._questionId = value;
    }
    public get text(): string | null {
        return this._text;
    }
    public set text(value: string | null) {
        this._text = value;
    }
    public get questionTypeId(): bigint {
        return this._questionTypeId;
    }
    public set questionTypeId(value: bigint) {
        this._questionTypeId = value;
    }
    public get questionTypeInstance(): IQuestionType {
        return this._questionTypeInstance;
    }
    public set questionTypeInstance(value: IQuestionType) {
        this._questionTypeInstance = value;
    }
    public get answers(): IAnswer[] {
        return this._answers;
    }
    public set answers(value: IAnswer[]) {
        this._answers = value;
    }
    constructor(parameters?:{answers?:IAnswer[],eventId?:bigint,questionId?:bigint,questionTypeId?:bigint, questionTypeInstance?: IQuestionType,text?:string}){
        this._answers=parameters?.answers??[];
        this._eventId=parameters?.eventId??0n;
        this._questionId=parameters?.questionId??0n;
        this._questionTypeId=parameters?.questionTypeId??0n;
        this._questionTypeInstance = parameters?.questionTypeInstance??new QuestionType();
        this._text=parameters?.text??"";
    }
    public toJSON(question:IQuestion) {
        return{
            "eventId":Number(question.eventId),
            "questionId":Number(question.questionId),
            "questionTypeId":Number(question.questionTypeId),
            "questionTypeInstance":new QuestionType().toJSON(question.questionTypeInstance),
            "text":question.text,
            "answers":new Question().answersToJSON(question.answers)
        }
    }
    public answersToJSON(answers: IAnswer[]) {
        let result:Object[]=[];
        answers.forEach((answer:IAnswer)=>result.push(new Answer().toJSON(answer)));
        return result;
    }
}