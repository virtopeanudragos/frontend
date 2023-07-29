import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTeamsListComponent } from './mentor-teams-list.component';

describe('MentorTeamsListComponent', () => {
  let component: MentorTeamsListComponent;
  let fixture: ComponentFixture<MentorTeamsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorTeamsListComponent]
    });
    fixture = TestBed.createComponent(MentorTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
