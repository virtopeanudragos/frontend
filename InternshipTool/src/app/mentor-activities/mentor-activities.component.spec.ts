import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorActivitiesComponent } from './mentor-activities.component';

describe('MentorActivitiesComponent', () => {
  let component: MentorActivitiesComponent;
  let fixture: ComponentFixture<MentorActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentorActivitiesComponent]
    });
    fixture = TestBed.createComponent(MentorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
