import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleMentorSessionsComponent } from './collapsible-mentor-sessions.component';

describe('CollapsibleMentorSessionsComponent', () => {
  let component: CollapsibleMentorSessionsComponent;
  let fixture: ComponentFixture<CollapsibleMentorSessionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleMentorSessionsComponent]
    });
    fixture = TestBed.createComponent(CollapsibleMentorSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
