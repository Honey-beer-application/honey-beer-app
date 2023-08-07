import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingFormsCardComponent } from './voting-forms-card.component';

describe('VotingFormsCardComponent', () => {
  let component: VotingFormsCardComponent;
  let fixture: ComponentFixture<VotingFormsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingFormsCardComponent]
    });
    fixture = TestBed.createComponent(VotingFormsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
