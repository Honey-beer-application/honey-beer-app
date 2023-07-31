import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCardComponent } from './discount-card.component';

describe('DiscountCardComponent', () => {
  let component: DiscountCardComponent;
  let fixture: ComponentFixture<DiscountCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountCardComponent]
    });
    fixture = TestBed.createComponent(DiscountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
