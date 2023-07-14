import IOffer from "./IOffer";

export default interface IProduct{
    productId:bigint;
    name:string;
    description:string;
    offerInstance:IOffer;
}