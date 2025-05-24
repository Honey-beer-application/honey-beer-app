import {Injectable} from "@angular/core"
import { DiscountService } from "../Services/Discount.service";
import { IDiscount } from "../Interfaces/IDiscount";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})
export class DiscountController{
    constructor(private readonly discountService:DiscountService){

    }
    public loadAllDiscounts():Observable<IDiscount[]>{
        return this.discountService.loadAllDiscounts();
    }
}