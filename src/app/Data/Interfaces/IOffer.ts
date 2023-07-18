import IProduct from "./IProduct";

export default interface IOffer{
    productId:bigint;
    offerId:bigint;
    amount:number;
    beginDate:Date;
    endDate:Date;
    productInstance:IProduct | null;
}