import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoresComponent } from './our-stores.component';

describe('OurStoresComponent', () => {
  let component: OurStoresComponent;
  let fixture: ComponentFixture<OurStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStoresComponent]
    });
    fixture = TestBed.createComponent(OurStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
