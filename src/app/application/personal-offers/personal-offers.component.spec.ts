import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOffersComponent } from './personal-offers.component';

describe('PersonalOffersComponent', () => {
  let component: PersonalOffersComponent;
  let fixture: ComponentFixture<PersonalOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalOffersComponent]
    });
    fixture = TestBed.createComponent(PersonalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
