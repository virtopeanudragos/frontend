import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactivityFormComponent } from './addactivity-form.component';

describe('AddactivityFormComponent', () => {
  let component: AddactivityFormComponent;
  let fixture: ComponentFixture<AddactivityFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddactivityFormComponent]
    });
    fixture = TestBed.createComponent(AddactivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
