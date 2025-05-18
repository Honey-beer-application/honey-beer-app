import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerComponent } from './scanner.component';
import { provideHttpClient } from '@angular/common/http';
import QRCodeController from 'src/app/Data/Controllers/QRCodeController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScannerModule } from './scanner.module';

describe('ScannerComponent', () => {
  let component: ScannerComponent;
  let fixture: ComponentFixture<ScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerComponent],
      imports: [FormsModule, ReactiveFormsModule,ScannerModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(ScannerComponent);
    TestBed.inject(QRCodeController);
    TestBed.inject(CustomerController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
