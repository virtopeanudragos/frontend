import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTopbarComponent } from './user-profile-topbar.component';

describe('UserProfileTopbarComponent', () => {
  let component: UserProfileTopbarComponent;
  let fixture: ComponentFixture<UserProfileTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileTopbarComponent]
    });
    fixture = TestBed.createComponent(UserProfileTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
