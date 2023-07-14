import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';



@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    NgxScannerQrcodeModule
  ]
})
export class ScannerModule { }
