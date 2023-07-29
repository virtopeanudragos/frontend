import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderMyteamComponent } from './teamleader-myteam.component';

describe('TeamleaderMyteamComponent', () => {
  let component: TeamleaderMyteamComponent;
  let fixture: ComponentFixture<TeamleaderMyteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamleaderMyteamComponent]
    });
    fixture = TestBed.createComponent(TeamleaderMyteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
