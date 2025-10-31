import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberFeedbackList } from './barber-feedback-list';

describe('BarberFeedbackList', () => {
  let component: BarberFeedbackList;
  let fixture: ComponentFixture<BarberFeedbackList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberFeedbackList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberFeedbackList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
