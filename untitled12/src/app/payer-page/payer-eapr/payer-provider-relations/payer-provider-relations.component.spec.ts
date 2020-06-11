import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerProviderRelationsComponent } from './payer-provider-relations.component';

describe('PayerProviderRelationsComponent', () => {
  let component: PayerProviderRelationsComponent;
  let fixture: ComponentFixture<PayerProviderRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayerProviderRelationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerProviderRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
