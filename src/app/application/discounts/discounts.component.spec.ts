import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsComponent } from './discounts.component';
import { provideHttpClient } from '@angular/common/http';

describe('DiscountsComponent', () => {
  let component: DiscountsComponent;
  let fixture: ComponentFixture<DiscountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountsComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(DiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
