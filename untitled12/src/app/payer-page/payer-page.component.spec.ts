import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerPageComponent } from './payer-page.component';

describe('PayerPageComponent', () => {
  let component: PayerPageComponent;
  let fixture: ComponentFixture<PayerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
