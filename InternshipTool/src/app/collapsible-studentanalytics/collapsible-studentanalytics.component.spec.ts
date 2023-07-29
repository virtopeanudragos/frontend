import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleStudentanalyticsComponent } from './collapsible-studentanalytics.component';

describe('CollapsibleStudentanalyticsComponent', () => {
  let component: CollapsibleStudentanalyticsComponent;
  let fixture: ComponentFixture<CollapsibleStudentanalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleStudentanalyticsComponent]
    });
    fixture = TestBed.createComponent(CollapsibleStudentanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
