import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject, Subscriber, Subscription } from 'rxjs';
import IQRCode from './../../Data/Interfaces/IQRCode';
import QRCode from './../../Data/Classes/QRCode';
import QRCodeController from './../../Data/Controllers/QRCodeController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnDestroy{

  private qrCode:string | null = null;
  private subs : Subscription;
  @ViewChild('action') action!:NgxScannerQrcodeComponent ;

  public event!:BehaviorSubject<ScannerQRCodeResult[]> ;
  constructor(private qrCodeController:QRCodeController,private customerController:CustomerController){
    this.subs = new Subscription();
  }
  ngOnDestroy(): void {
    
  }

  public beginScanning():void{
    this.action.start();
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    // e && action && action.pause();
    if(this.qrCode==null){
      this.qrCode = e[0].value;
      let qrCode:IQRCode = new QRCode();
      qrCode.Code=this.qrCode;
      qrCode.scannedBy=this.customerController.registeredCustomer;
      console.log(qrCode);
      this.qrCodeController.scanQRCode(qrCode)
      .subscribe(
        (data)=>alert("QR code is successfully scanned."),
        (error)=>alert(JSON.stringify(error.error))
      );
    }
  }
}
