import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerAppealsComponent } from './payer-appeals.component';

describe('PayerAppealsComponent', () => {
  let component: PayerAppealsComponent;
  let fixture: ComponentFixture<PayerAppealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerAppealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerAppealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
