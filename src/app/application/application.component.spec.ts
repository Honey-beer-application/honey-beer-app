import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationComponent } from './application.component';
import { provideHttpClient } from '@angular/common/http';
import { NavigationBigComponent } from './navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from './navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from './navigation/navigation-small/navigation-small.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('ApplicationComponent', () => {
  let component: ApplicationComponent;
  let fixture: ComponentFixture<ApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationComponent,NavigationBigComponent,NavigationMediumComponent,NavigationSmallComponent],
      imports: [RouterModule,MatIconModule,ReactiveFormsModule],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(ApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
