import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderAnalyticsComponent } from './teamleader-analytics.component';

describe('TeamleaderAnalyticsComponent', () => {
  let component: TeamleaderAnalyticsComponent;
  let fixture: ComponentFixture<TeamleaderAnalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleaderAnalyticsComponent]
    });
    fixture = TestBed.createComponent(TeamleaderAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
