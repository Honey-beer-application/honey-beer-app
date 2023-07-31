import ICustomer from "./ICustomer";

export default interface IQRCode{
    QRCodeId:bigint;
    Code:string;
    scannedBy:ICustomer;
}