import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMediumComponent } from './navigation-medium.component';

describe('NavigationMediumComponent', () => {
  let component: NavigationMediumComponent;
  let fixture: ComponentFixture<NavigationMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMediumComponent]
    });
    fixture = TestBed.createComponent(NavigationMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
