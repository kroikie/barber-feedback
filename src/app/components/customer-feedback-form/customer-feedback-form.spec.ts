import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedbackForm } from './customer-feedback-form';

describe('CustomerFeedbackForm', () => {
  let component: CustomerFeedbackForm;
  let fixture: ComponentFixture<CustomerFeedbackForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeedbackForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFeedbackForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
