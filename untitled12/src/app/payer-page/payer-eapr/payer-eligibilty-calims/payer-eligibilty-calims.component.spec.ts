import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerEligibiltyCalimsComponent } from './payer-eligibilty-calims.component';

describe('PayerEligibiltyCalimsComponent', () => {
  let component: PayerEligibiltyCalimsComponent;
  let fixture: ComponentFixture<PayerEligibiltyCalimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerEligibiltyCalimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerEligibiltyCalimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
