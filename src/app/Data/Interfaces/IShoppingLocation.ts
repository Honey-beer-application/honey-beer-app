import ICompany from "./ICompany";
import IProduct from "./IProduct";

export interface IShoppingLocation{
    pib:bigint;
    shoppingLocationId:bigint;
    location:string;
    companyInstance:ICompany;
    productsInLocation:IProduct[];
}