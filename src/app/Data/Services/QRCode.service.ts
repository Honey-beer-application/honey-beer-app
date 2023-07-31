import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import IQRCode from "../Interfaces/IQRCode";
import { Observable } from "rxjs";
@Injectable({providedIn:"root"})
export class QRCodeService{
    constructor(private httpClient:HttpClient){

    }
    public scanQRCode(qrCode:IQRCode):Observable<IQRCode>{
        return this.httpClient.post<IQRCode>("https://localhost:7165/api/QRCode",{
            "qrCodeId":Number(qrCode.QRCodeId),
            "code":qrCode.Code,
            "scannedBy":{
                "customerId":Number(qrCode.scannedBy.customerId),
                "username":qrCode.scannedBy.username,
                "password":qrCode.scannedBy.password,
                "email":qrCode.scannedBy.email,
                "personalEmailInstance":{
                    "email":qrCode.scannedBy.personalEmailInstance.email
                }
            }
        });
    }
}