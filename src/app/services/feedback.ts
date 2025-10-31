import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private feedback: Feedback[] = [
    { id: '1', barberId: '1', customerId: 'cust1', rating: 5, comment: 'Great haircut!', createdAt: new Date() },
    { id: '2', barberId: '1', customerId: 'cust2', rating: 4, comment: 'Good service.', createdAt: new Date() },
    { id: '3', barberId: '2', customerId: 'cust3', rating: 3, comment: 'Average experience.', createdAt: new Date() },
  ];

  constructor() {}

  submitFeedback(newFeedback: Omit<Feedback, 'id' | 'createdAt'>): void {
    const id = (this.feedback.length + 1).toString();
    this.feedback.push({ ...newFeedback, id, createdAt: new Date() });
  }

  getFeedbackForBarber(barberId: string): Feedback[] {
    return this.feedback.filter((f) => f.barberId === barberId);
  }

  getBarberStats(barberId: string): { totalFeedback: number; averageRating: number; satisfactionPercentage: number } {
    const barberFeedback = this.getFeedbackForBarber(barberId);
    const totalFeedback = barberFeedback.length;

    if (totalFeedback === 0) {
      return { totalFeedback: 0, averageRating: 0, satisfactionPercentage: 0 };
    }

    const totalRating = barberFeedback.reduce((sum, f) => sum + f.rating, 0);
    const averageRating = totalRating / totalFeedback;
    const satisfiedFeedback = barberFeedback.filter((f) => f.rating >= 4).length; // Assuming 4 or 5 stars is satisfied
    const satisfactionPercentage = (satisfiedFeedback / totalFeedback) * 100;

    return { totalFeedback, averageRating, satisfactionPercentage };
  }
}
