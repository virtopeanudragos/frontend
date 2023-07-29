import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnalyticsRowComponent } from './student-analytics-row.component';

describe('StudentAnalyticsRowComponent', () => {
  let component: StudentAnalyticsRowComponent;
  let fixture: ComponentFixture<StudentAnalyticsRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAnalyticsRowComponent]
    });
    fixture = TestBed.createComponent(StudentAnalyticsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
