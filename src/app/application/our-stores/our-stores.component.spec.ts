import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoresComponent } from './our-stores.component';
import { provideHttpClient } from '@angular/common/http';

describe('OurStoresComponent', () => {
  let component: OurStoresComponent;
  let fixture: ComponentFixture<OurStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStoresComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(OurStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
