import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmLogoComponent } from './ibm-logo.component';

describe('IbmLogoComponent', () => {
  let component: IbmLogoComponent;
  let fixture: ComponentFixture<IbmLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IbmLogoComponent]
    });
    fixture = TestBed.createComponent(IbmLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
