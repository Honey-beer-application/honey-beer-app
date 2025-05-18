import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMediumComponent } from './navigation-medium.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

describe('NavigationMediumComponent', () => {
  let component: NavigationMediumComponent;
  let fixture: ComponentFixture<NavigationMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMediumComponent],
      imports: [MatIconModule],
      providers:[provideHttpClient()]
    });
    fixture = TestBed.createComponent(NavigationMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
