import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMediumComponent } from './navigation-medium.component';
import { provideHttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { ApplicationComponent } from '../../application.component';

describe('NavigationMediumComponent', () => {
  let component: NavigationMediumComponent;
  let fixture: ComponentFixture<NavigationMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationMediumComponent],
      imports: [MatIconModule, RouterTestingModule.withRoutes([{path: 'app',component: ApplicationComponent}])],
      providers:[provideHttpClient()]
    });
    fixture = TestBed.createComponent(NavigationMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute function setImage without exception',()=>{
    expect(()=>component.setImage("#")).not.toThrowError();
  })

  it('should execute function redirectTo without throwing exception', ()=>{
    expect(()=>component.redirectTo("app")).not.toThrowError();
  })
});
