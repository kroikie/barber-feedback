import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BarberService } from '../../services/barber';
import { FeedbackService } from '../../services/feedback';
import { Barber } from '../../models/barber.model';

@Component({
  selector: 'app-barber-stats',
  standalone: true,
  imports: [CommonModule, NgIf, DecimalPipe],
  templateUrl: './barber-stats.html',
  styleUrl: './barber-stats.scss',
})
export class BarberStatsComponent implements OnInit {
  barber: Barber | undefined;
  stats: { totalFeedback: number; averageRating: number; satisfactionPercentage: number } | undefined;

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
          this.stats = this.feedbackService.getBarberStats(barberId);
        }
      }
    });
  }
}
