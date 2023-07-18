import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject } from 'rxjs';
import IQRCode from './../../Data/Interfaces/IQRCode';
import QRCode from './../../Data/Classes/QRCode';
import QRCodeController from './../../Data/Controllers/QRCodeController';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent{

  private qrCode:string | null = null;
  @ViewChild('action') action!:NgxScannerQrcodeComponent ;

  public event!:BehaviorSubject<ScannerQRCodeResult[]> ;
  constructor(private qrCodeController:QRCodeController){
  }

  public beginScanning():void{
    this.action.start();
    console.log(this.event);
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    // e && action && action.pause();
    console.log(e[0].value);
    if(this.qrCode==null){
      this.qrCode = e[0].value;
      let qrCode:IQRCode = new QRCode();
      qrCode.Code=this.qrCode;
      qrCode.Scanned=true;
      this.qrCodeController.scanQRCode(qrCode)
      .subscribe(
        (data)=>alert("QR code is successfully registered."),
        (error)=>alert(error.error.detail)
      );
    }
  }
}
