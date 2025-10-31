import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberStats } from './barber-stats';

describe('BarberStats', () => {
  let component: BarberStats;
  let fixture: ComponentFixture<BarberStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
