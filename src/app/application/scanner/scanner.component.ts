import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject, Subscription } from 'rxjs';
import IQRCode from './../../Data/Interfaces/IQRCode';
import QRCode from './../../Data/Classes/QRCode';
import QRCodeController from './../../Data/Controllers/QRCodeController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  exportAs: 'scanner'
})
export class ScannerComponent implements OnDestroy{

  private qrCode:string | null = null;
  private readonly subs : Subscription;
  @ViewChild('action') action!:NgxScannerQrcodeComponent ;

  public event!:BehaviorSubject<ScannerQRCodeResult[]> ;
  constructor(private readonly qrCodeController:QRCodeController,private readonly customerController:CustomerController){
    this.subs = new Subscription();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public beginScanning():void{
    this.action.start();
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    if(this.qrCode==null&& e.length>0){
      this.qrCode = e[0].value;
      
      let qrCode:IQRCode = new QRCode();
      qrCode.Code=this.qrCode;
      this.subs.add(
        this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>qrCode.scannedBy=data)
      );
      this.qrCodeController.scanQRCode(qrCode)
      .subscribe(
        {
          next:(data)=>alert("QR code is successfully scanned."),
          error:(error)=>alert(error.error.detail)
        }
      );
    }
  }
  
  public endScanning(){
    this.action.stop();
    this.qrCode=null;
  }
}
