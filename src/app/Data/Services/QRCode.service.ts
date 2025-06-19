import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import IQRCode from "../Interfaces/IQRCode";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({providedIn:"root"})
export class QRCodeService{
    constructor(private readonly httpClient:HttpClient){

    }
    public scanQRCode(qrCode:IQRCode):Observable<IQRCode>{
        return this.httpClient.post<IQRCode>(environment.apiUrl+"/api/QRCode",{
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
    // public scanQRCode(qrCode:IQRCode):Observable<IQRCode>{
    //     return this.httpClient.post<IQRCode>("https://honeybeer.bsite.net/api/QRCode",{
    //         "qrCodeId":Number(qrCode.QRCodeId),
    //         "code":qrCode.Code,
    //         "scannedBy":{
    //             "customerId":Number(qrCode.scannedBy.customerId),
    //             "username":qrCode.scannedBy.username,
    //             "password":qrCode.scannedBy.password,
    //             "email":qrCode.scannedBy.email,
    //             "personalEmailInstance":{
    //                 "email":qrCode.scannedBy.personalEmailInstance.email
    //             }
    //         }
    //     });
    // }
}