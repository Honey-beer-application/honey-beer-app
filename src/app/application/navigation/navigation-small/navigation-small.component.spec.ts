import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSmallComponent } from './navigation-small.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

describe('NavigationSmallComponent', () => {
  let component: NavigationSmallComponent;
  let fixture: ComponentFixture<NavigationSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationSmallComponent],
      imports: [MatIconModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(NavigationSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
