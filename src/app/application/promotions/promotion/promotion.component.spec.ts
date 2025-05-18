import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionComponent } from './promotion.component';
import { provideHttpClient } from '@angular/common/http';
import { EventController } from 'src/app/Data/Controllers/EventController';

describe('PromotionComponent', () => {
  let component: PromotionComponent;
  let fixture: ComponentFixture<PromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(PromotionComponent);
    TestBed.inject(EventController)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
