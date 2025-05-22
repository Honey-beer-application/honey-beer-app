import { Observable, BehaviorSubject } from "rxjs";
import Customer from "../Classes/Customer";
import ICustomer from "../Interfaces/ICustomer";
import { CustomerService } from "../Services/Customer.service";
import {Injectable} from '@angular/core';
@Injectable({providedIn:"root"})
export default class CustomerController{

    public registeredCustomer:BehaviorSubject<ICustomer>;

    constructor(private readonly customerService:CustomerService){
        let customer:ICustomer = new Customer();
        this.registeredCustomer = new BehaviorSubject(customer);
    }
    public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
        
        return this.customerService.createCustomer(username,email,password);
    }
    public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.customerService.deleteCustomer(customer);
    }
}