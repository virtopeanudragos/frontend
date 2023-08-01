import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckgradefeedbackDialogboxComponent } from './checkgradefeedback-dialogbox.component';

describe('CheckgradefeedbackDialogboxComponent', () => {
  let component: CheckgradefeedbackDialogboxComponent;
  let fixture: ComponentFixture<CheckgradefeedbackDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckgradefeedbackDialogboxComponent]
    });
    fixture = TestBed.createComponent(CheckgradefeedbackDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
