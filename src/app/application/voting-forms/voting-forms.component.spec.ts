import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingFormsComponent } from './voting-forms.component';
import { provideHttpClient } from '@angular/common/http';

describe('VotingFormsComponent', () => {
  let component: VotingFormsComponent;
  let fixture: ComponentFixture<VotingFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingFormsComponent],
      providers: [provideHttpClient()]
    });
    fixture = TestBed.createComponent(VotingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
