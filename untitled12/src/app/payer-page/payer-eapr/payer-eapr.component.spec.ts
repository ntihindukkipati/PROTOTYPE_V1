import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerEAPRComponent } from './payer-eapr.component';

describe('PayerEAPRComponent', () => {
  let component: PayerEAPRComponent;
  let fixture: ComponentFixture<PayerEAPRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerEAPRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerEAPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
