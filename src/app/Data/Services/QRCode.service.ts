import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import IQRCode from "../Interfaces/IQRCode";
import { Observable } from "rxjs";
@Injectable({providedIn:"root"})
export class QRCodeService{
    constructor(private httpClient:HttpClient){

    }
    public scanQRCode(qrCode:IQRCode):Observable<IQRCode>{
        return this.httpClient.post<IQRCode>("",{body:{
            "qr_code_id":qrCode.QRCodeId,
            "code":qrCode.Code,
            "scanned":qrCode.Scanned
        }});
    }
}