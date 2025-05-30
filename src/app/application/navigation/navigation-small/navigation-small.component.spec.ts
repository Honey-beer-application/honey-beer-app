import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationSmallComponent } from './navigation-small.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicationComponent } from '../../application.component';

describe('NavigationSmallComponent', () => {
  let component: NavigationSmallComponent;
  let fixture: ComponentFixture<NavigationSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationSmallComponent, ApplicationComponent],
      imports: [MatIconModule, RouterTestingModule.withRoutes([{path: 'app',component: ApplicationComponent}])],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(NavigationSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute redirectTo without throwing exception',()=>{
    expect(component.redirectTo('app')).toEqual(undefined);
  });
});
