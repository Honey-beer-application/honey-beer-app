import { Observable } from "rxjs";
import Customer from "../Classes/Customer";
import ICustomer from "../Interfaces/ICustomer";
import { CustomerService } from "../Services/Customer.service";
import {Injectable} from '@angular/core'
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
    }
    public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
        
        return this.customerService.createCustomer(username,email,password);
    }
    public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.customerService.deleteCustomer(customer);
    }
}