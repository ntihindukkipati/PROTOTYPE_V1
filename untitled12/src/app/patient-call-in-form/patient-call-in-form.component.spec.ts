import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCallInFormComponent } from './patient-call-in-form.component';

describe('PatientCallInFormComponent', () => {
  let component: PatientCallInFormComponent;
  let fixture: ComponentFixture<PatientCallInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCallInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCallInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
