import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSessionsComponent } from './mentor-sessions.component';

describe('MentorSessionsComponent', () => {
  let component: MentorSessionsComponent;
  let fixture: ComponentFixture<MentorSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorSessionsComponent]
    });
    fixture = TestBed.createComponent(MentorSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
