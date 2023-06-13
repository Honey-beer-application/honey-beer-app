import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSmallComponent } from './navigation-small.component';

describe('NavigationSmallComponent', () => {
  let component: NavigationSmallComponent;
  let fixture: ComponentFixture<NavigationSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationSmallComponent]
    });
    fixture = TestBed.createComponent(NavigationSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
