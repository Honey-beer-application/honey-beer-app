import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingFormsComponent } from './voting-forms.component';

describe('VotingFormsComponent', () => {
  let component: VotingFormsComponent;
  let fixture: ComponentFixture<VotingFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingFormsComponent]
    });
    fixture = TestBed.createComponent(VotingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
