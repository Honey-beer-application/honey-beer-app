import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsComponent } from './promotions.component';
import { provideHttpClient } from '@angular/common/http';
import { EventController } from 'src/app/Data/Controllers/EventController';

describe('PromotionsComponent', () => {
  let component: PromotionsComponent;
  let fixture: ComponentFixture<PromotionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionsComponent],
      providers: [
          // ... other test providers
          provideHttpClient(),
      ],
    });
    fixture = TestBed.createComponent(PromotionsComponent);
    TestBed.inject(EventController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
