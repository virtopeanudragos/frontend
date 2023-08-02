import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentswithoutteamDialogboxComponent } from './studentswithoutteam-dialogbox.component';

describe('StudentswithoutteamDialogboxComponent', () => {
  let component: StudentswithoutteamDialogboxComponent;
  let fixture: ComponentFixture<StudentswithoutteamDialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentswithoutteamDialogboxComponent]
    });
    fixture = TestBed.createComponent(StudentswithoutteamDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
