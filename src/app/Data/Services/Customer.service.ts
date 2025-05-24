import { HttpClient } from "@angular/common/http";
import Customer from "../Classes/Customer";
import {Injectable} from "@angular/core"
import ICustomer from "../Interfaces/ICustomer";
import { Observable } from "rxjs";


@Injectable({providedIn:"root"})
export class CustomerService{

    public constructor(private readonly httpClient:HttpClient){

    }
    public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
        return this.httpClient.post<Customer>('https://localhost:7165/api/customer',{"username":username,"password":password,
        "email":email,"personalEmailInstance":{"email":email}});
    }
    public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.httpClient.delete<ICustomer>('https://localhost:7165/api/customer',
        {
            body:{
                "customerId": Number(customer.customerId),
                "username": customer.username,
                "password": customer.password,
                "email": customer.email,
                "personalEmailInstance": {
                  "email": customer.personalEmailInstance.email
                }
            }
        });
    }
    // public createCustomer(username:string,email:string,password:string):Observable<ICustomer>{
    //     return this.httpClient.post<Customer>('https://honeybeer.bsite.net/api/customer',{"username":username,"password":password,
    //     "email":email,"personalEmailInstance":{"email":email}});
    // }
    // public deleteCustomer(customer:ICustomer):Observable<ICustomer>{
    //     return this.httpClient.delete<ICustomer>('https://honeybeer.bsite.net/api/customer',
    //     {
    //         body:{
    //             "customerId": Number(customer.customerId),
    //             "username": customer.username,
    //             "password": customer.password,
    //             "email": customer.email,
    //             "personalEmailInstance": {
    //               "email": customer.personalEmailInstance.email
    //             }
    //         }
    //     });
    // }
}