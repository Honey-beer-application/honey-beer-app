import ICompany from "./ICompany";
import IOffer from "./IOffer";

export default interface IOfferByCompany{
    pib:bigint;
    productId:bigint;
    offerId:bigint;
    companyInstance:ICompany;
    offerInstance:IOffer;
}