import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject, Subscriber, Subscription } from 'rxjs';
import IQRCode from './../../Data/Interfaces/IQRCode';
import QRCode from './../../Data/Classes/QRCode';
import QRCodeController from './../../Data/Controllers/QRCodeController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';

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
    this.subs.unsubscribe();
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
      this.subs.add(
        this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>qrCode.scannedBy=data)
      );
      this.qrCodeController.scanQRCode(qrCode)
      .subscribe(
        (data)=>alert("QR code is successfully scanned."),
        (error)=>alert(JSON.stringify(error.error))
      );
    }
  }
  public endScanning(){
    this.action.stop();
    this.qrCode=null;
  }
}
