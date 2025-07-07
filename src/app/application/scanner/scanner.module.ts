import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import {NgxScannerQrcodeComponent} from "ngx-scanner-qrcode";
import { ScannerroutingModule } from './scanner-routing.module';



@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    NgxScannerQrcodeComponent,
    ScannerroutingModule
  ]
})
export class ScannerModule { }
