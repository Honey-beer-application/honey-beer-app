import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOffersContentComponent } from './personal-offers-content.component';

describe('PersonalOffersContentComponent', () => {
  let component: PersonalOffersContentComponent;
  let fixture: ComponentFixture<PersonalOffersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalOffersContentComponent]
    });
    fixture = TestBed.createComponent(PersonalOffersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
