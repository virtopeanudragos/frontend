import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAnalyticsRowComponent } from './mentor-analytics-row.component';

describe('MentorAnalyticsRowComponent', () => {
  let component: MentorAnalyticsRowComponent;
  let fixture: ComponentFixture<MentorAnalyticsRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorAnalyticsRowComponent]
    });
    fixture = TestBed.createComponent(MentorAnalyticsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
