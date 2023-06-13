import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBigComponent } from './navigation-big.component';

describe('NavigationBigComponent', () => {
  let component: NavigationBigComponent;
  let fixture: ComponentFixture<NavigationBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBigComponent]
    });
    fixture = TestBed.createComponent(NavigationBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
