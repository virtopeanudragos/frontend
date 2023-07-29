import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleTeamslistComponent } from './collapsible-teamslist.component';

describe('CollapsibleTeamslistComponent', () => {
  let component: CollapsibleTeamslistComponent;
  let fixture: ComponentFixture<CollapsibleTeamslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsibleTeamslistComponent]
    });
    fixture = TestBed.createComponent(CollapsibleTeamslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
