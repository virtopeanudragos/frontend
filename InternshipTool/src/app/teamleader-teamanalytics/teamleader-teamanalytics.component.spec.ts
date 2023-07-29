import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderTeamanalyticsComponent } from './teamleader-teamanalytics.component';

describe('TeamleaderTeamanalyticsComponent', () => {
  let component: TeamleaderTeamanalyticsComponent;
  let fixture: ComponentFixture<TeamleaderTeamanalyticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleaderTeamanalyticsComponent]
    });
    fixture = TestBed.createComponent(TeamleaderTeamanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
