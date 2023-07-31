import IProduct from "./IProduct";

export default interface IReservation{
    reservationId:bigint,
    productId:bigint,
    pib:bigint,
    amount:number,
    delivery:Date,
    productInstance:IProduct
}