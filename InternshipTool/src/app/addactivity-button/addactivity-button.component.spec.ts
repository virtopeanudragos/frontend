import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactivityButtonComponent } from './addactivity-button.component';

describe('AddactivityButtonComponent', () => {
  let component: AddactivityButtonComponent;
  let fixture: ComponentFixture<AddactivityButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddactivityButtonComponent]
    });
    fixture = TestBed.createComponent(AddactivityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
