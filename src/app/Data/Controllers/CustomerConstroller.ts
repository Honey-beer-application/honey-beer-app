import { Observable } from "rxjs";
import Customer from "../Classes/Customer";
import ICustomer from "../Interfaces/ICustomer";
import { CustomerService } from "../Services/Customer.service";
import {Injectable} from '@angular/core'
import PersonalEmail from "../Classes/PersonalEmail";
import { BehaviorSubject } from "rxjs";
@Injectable({providedIn:"root"})
export default class CustomerController{

    // private _registeredCustomer: ICustomer;

    public registeredCustomer:BehaviorSubject<ICustomer>;
    // public get registeredCustomer(): ICustomer {
    //     return this._registeredCustomer;
    // }
    // public set registeredCustomer(value: ICustomer) {
    //     this._registeredCustomer = value;
    // }

    constructor(private customerService:CustomerService){
        let customer:ICustomer = new Customer();
        // customer.customerId=13n;
        // customer.email="customer10@gmail.com";
        // customer.password="customer10";
        // customer.username="customer10";
        // customer.personalEmailInstance = new PersonalEmail();
        // customer.personalEmailInstance.email="customer10@gmail.com";
        this.registeredCustomer = new BehaviorSubject(customer);
        //this.registeredCustomer = new BehaviorSubject(<ICustomer>(new Customer()));
    }
    public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
        
        return this.customerService.createCustomer(username,email,password);
    }
    public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.customerService.deleteCustomer(customer);
    }
}