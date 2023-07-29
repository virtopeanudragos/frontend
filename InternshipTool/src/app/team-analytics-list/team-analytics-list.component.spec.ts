import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAnalyticsListComponent } from './team-analytics-list.component';

describe('TeamAnalyticsListComponent', () => {
  let component: TeamAnalyticsListComponent;
  let fixture: ComponentFixture<TeamAnalyticsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAnalyticsListComponent]
    });
    fixture = TestBed.createComponent(TeamAnalyticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
