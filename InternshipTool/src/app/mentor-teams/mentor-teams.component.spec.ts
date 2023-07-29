import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTeamsComponent } from './mentor-teams.component';

describe('MentorTeamsComponent', () => {
  let component: MentorTeamsComponent;
  let fixture: ComponentFixture<MentorTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorTeamsComponent]
    });
    fixture = TestBed.createComponent(MentorTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
