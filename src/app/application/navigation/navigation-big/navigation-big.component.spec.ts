import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBigComponent } from './navigation-big.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

describe('NavigationBigComponent', () => {
  let component: NavigationBigComponent;
  let fixture: ComponentFixture<NavigationBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBigComponent],
      imports: [MatIconModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(NavigationBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
