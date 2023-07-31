import { Observable } from "rxjs";
import Customer from "../Classes/Customer";
import ICustomer from "../Interfaces/ICustomer";
import { CustomerService } from "../Services/Customer.service";
import {Injectable} from '@angular/core'
import PersonalEmail from "../Classes/PersonalEmail";
@Injectable({providedIn:"root"})
export default class CustomerController{

    private _registeredCustomer: ICustomer;

    public get registeredCustomer(): ICustomer {
        return this._registeredCustomer;
    }
    public set registeredCustomer(value: ICustomer) {
        this._registeredCustomer = value;
    }

    constructor(private customerService:CustomerService){
        this._registeredCustomer = new Customer();
        this._registeredCustomer.customerId=2n;
        this._registeredCustomer.email="customer1@gmail.com";
        this._registeredCustomer.password="customer1";
        this._registeredCustomer.username="customer1";
        this._registeredCustomer.personalEmailInstance = new PersonalEmail();
        this._registeredCustomer.personalEmailInstance.email="customer1@gmail.com";
    }
    public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
        
        return this.customerService.createCustomer(username,email,password);
    }
    public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.customerService.deleteCustomer(customer);
    }
}