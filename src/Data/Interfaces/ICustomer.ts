import IPersonalEmail from "./IPersonalEmail";

export default interface ICustomer{
    customerId:bigint;
    username:string;
    email:string;
    password:string;
    personalEmailInstance: IPersonalEmail;
}