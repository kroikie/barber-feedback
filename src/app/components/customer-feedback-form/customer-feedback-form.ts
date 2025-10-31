import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BarberService } from '../../services/barber';
import { FeedbackService } from '../../services/feedback';
import { Barber } from '../../models/barber.model';

@Component({
  selector: 'app-customer-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-feedback-form.html',
  styleUrl: './customer-feedback-form.scss',
})
export class CustomerFeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  barbers: Barber[] = [];

  constructor(
    private fb: FormBuilder,
    private barberService: BarberService,
    private feedbackService: FeedbackService,
    private router: Router
  ) {
    this.feedbackForm = this.fb.group({
      barberId: ['', Validators.required],
      rating: ['', Validators.required],
      comment: [''],
    });
  }

  ngOnInit(): void {
    this.barbers = this.barberService.getBarbers();
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      this.feedbackService.submitFeedback(this.feedbackForm.value);
      alert('Feedback submitted successfully!');
      this.feedbackForm.reset();
      this.router.navigate(['/']); // Navigate back to home or a confirmation page
    }
  }
}
