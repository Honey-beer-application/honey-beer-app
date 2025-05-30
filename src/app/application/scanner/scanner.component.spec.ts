import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerComponent } from './scanner.component';
import { provideHttpClient } from '@angular/common/http';
import QRCodeController from 'src/app/Data/Controllers/QRCodeController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScannerModule } from './scanner.module';
import { BehaviorSubject, of, throwError } from 'rxjs';
import QRCode from 'src/app/Data/Classes/QRCode';
import { ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import Customer from 'src/app/Data/Classes/Customer';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';
import { By } from '@angular/platform-browser';
import CustomError from 'src/app/Data/Classes/CustomError';

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;
  let qrCodeControllerSpyObj: jasmine.SpyObj<QRCodeController>;
  let customerControllerSpyObj: jasmine.SpyObj<CustomerController>;

  beforeEach(() => {
    qrCodeControllerSpyObj = jasmine.createSpyObj('QRCodeController',['scanQRCode']);
    customerControllerSpyObj = jasmine.createSpyObj('CustomerController',['subscribe']);
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      imports: [FormsModule, ReactiveFormsModule,ScannerModule],
      providers: [provideHttpClient(),{provide: QRCodeController, useValue: qrCodeControllerSpyObj}, {provide:CustomerController, useValue: customerControllerSpyObj}]
    });
    qrCodeControllerSpyObj = TestBed.inject(QRCodeController) as jasmine.SpyObj<QRCodeController>;
    qrCodeControllerSpyObj.scanQRCode.and.returnValue(of(new QRCode()));
    customerControllerSpyObj = TestBed.inject(CustomerController) as jasmine.SpyObj<CustomerController>;
    customerControllerSpyObj.registeredCustomer = new BehaviorSubject<ICustomer>(new Customer());
    fixture = TestBed.createComponent(ScannerComponent);
    TestBed.inject(QRCodeController);
    TestBed.inject(CustomerController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should begin scanning',()=>{
    expect(()=>component.beginScanning()).not.toThrow();
  });
  it('should stop scanning',()=>{
    expect(()=>component.endScanning()).not.toThrow();
  });
  it('should trigger event',()=>{
    let select = fixture.debugElement.query(By.css('ngx-scanner-qrcode'))
    expect(()=>{
      select.triggerEventHandler('event',ScannerQRCodeResult.createSymbolsFromPtr(1000, new ArrayBuffer(1000)))
    }).not.toThrow();
  });
  it('should trigger event with error',()=>{
    let select = fixture.debugElement.query(By.css('ngx-scanner-qrcode'));
    let exception: CustomError = new CustomError('qr code isn\'t scanned');
    qrCodeControllerSpyObj.scanQRCode.and.returnValue(throwError(()=>exception));
    spyOn(window,'alert');
    expect(()=>{
      select.triggerEventHandler('event',[{value: "value1"}, {value2: "value2"}] as ScannerQRCodeResult[])
    }).not.toThrow();
    expect(window.alert).toHaveBeenCalledWith(exception.message);
  });
  it('should trigger event successfully',()=>{
    let select = fixture.debugElement.query(By.css('ngx-scanner-qrcode'));
    qrCodeControllerSpyObj.scanQRCode.and.returnValue(of(new QRCode()));
    spyOn(window,'alert');
    expect(()=>{
      select.triggerEventHandler('event',[{value: "value1"}, {value2: "value2"}] as ScannerQRCodeResult[])
    }).not.toThrow();
  });
  it('should trigger empty event',()=>{
    let select = fixture.debugElement.query(By.css('ngx-scanner-qrcode'));
    expect(()=>{
      select.triggerEventHandler('event',[] as ScannerQRCodeResult[])
    }).not.toThrow();
  });
});
