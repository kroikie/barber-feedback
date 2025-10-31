import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CustomerFeedbackFormComponent } from './components/customer-feedback-form/customer-feedback-form';
import { BarberFeedbackListComponent } from './components/barber-feedback-list/barber-feedback-list';
import { BarberStatsComponent } from './components/barber-stats/barber-stats';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feedback/new', component: CustomerFeedbackFormComponent },
  { path: 'barber/:id/feedback', component: BarberFeedbackListComponent },
  { path: 'barber/:id/stats', component: BarberStatsComponent },
];