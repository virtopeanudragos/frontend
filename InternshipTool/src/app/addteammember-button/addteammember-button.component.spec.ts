import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteammemberButtonComponent } from './addteammember-button.component';

describe('AddteammemberButtonComponent', () => {
  let component: AddteammemberButtonComponent;
  let fixture: ComponentFixture<AddteammemberButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddteammemberButtonComponent]
    });
    fixture = TestBed.createComponent(AddteammemberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
