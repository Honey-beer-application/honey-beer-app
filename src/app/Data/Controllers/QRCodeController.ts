import { Observable } from "rxjs";
import IQRCode from "../Interfaces/IQRCode";
import { QRCodeService } from "../Services/QRCode.service";
import {Injectable} from "@angular/core"

@Injectable({providedIn:"root"})
export default class QRCodeController{

    constructor(private readonly qrCodeService:QRCodeService){

    }
    public scanQRCode(qrCode:IQRCode):Observable<IQRCode>{
        return this.qrCodeService.scanQRCode(qrCode);
    }
}