import IProduct from "./IProduct";
import { IShoppingLocation } from "./IShoppingLocation";

export interface IDiscount{
    pib:bigint;
    shoppingLocationId:bigint;
    productId:bigint;
    percentage:number;
    beginDate:Date;
    endDate:Date;
    shoppingLocationInstance: IShoppingLocation;
    productInstance:IProduct;
}