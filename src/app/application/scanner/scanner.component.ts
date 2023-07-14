import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent{


  @ViewChild('action') action!:NgxScannerQrcodeComponent ;

  public event!:BehaviorSubject<ScannerQRCodeResult[]> ;
  constructor(){
  }

  public beginScanning():void{
    this.action.start();
    console.log(this.event);
  }

  public onEvent(e: ScannerQRCodeResult[]): void {
    // e && action && action.pause();
    console.log(e[0].value);
  }
}
