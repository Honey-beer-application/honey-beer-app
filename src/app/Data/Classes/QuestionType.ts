import { IQuestionType } from "../Interfaces/IQuestionType";

export class QuestionType implements IQuestionType{
    private _questionTypeId: bigint;
    private _name: string;
    public get questionTypeId(): bigint {
        return this._questionTypeId;
    }
    public set questionTypeId(value: bigint) {
        this._questionTypeId = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(parameters?:{questionTypeId?:bigint, name?:string}){
        this._questionTypeId=parameters?.questionTypeId??0n;
        this._name=parameters?.name??"";
    }
    public toJSON(questionType:IQuestionType) {
        return {
            "questionTypeId":Number(questionType.questionTypeId),
            "name":questionType.name
        }
    }
}