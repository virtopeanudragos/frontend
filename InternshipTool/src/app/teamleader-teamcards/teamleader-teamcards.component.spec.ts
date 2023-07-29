import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderTeamcardsComponent } from './teamleader-teamcards.component';

describe('TeamleaderTeamcardsComponent', () => {
  let component: TeamleaderTeamcardsComponent;
  let fixture: ComponentFixture<TeamleaderTeamcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleaderTeamcardsComponent]
    });
    fixture = TestBed.createComponent(TeamleaderTeamcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
