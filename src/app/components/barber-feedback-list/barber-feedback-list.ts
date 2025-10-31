import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BarberService } from '../../services/barber';
import { FeedbackService } from '../../services/feedback';
import { Barber } from '../../models/barber.model';
import { Feedback } from '../../models/feedback.model';

@Component({
  selector: 'app-barber-feedback-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barber-feedback-list.html',
  styleUrl: './barber-feedback-list.scss',
})
export class BarberFeedbackListComponent implements OnInit {
  barber: Barber | undefined;
  feedback: Feedback[] = [];

  constructor(
    private route: ActivatedRoute,
    private barberService: BarberService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const barberId = params.get('id');
      if (barberId) {
        this.barber = this.barberService.getBarberById(barberId);
        if (this.barber) {
          this.feedback = this.feedbackService.getFeedbackForBarber(barberId);
        }
      }
    });
  }
}
