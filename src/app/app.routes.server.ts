import { RenderMode, ServerRoute } from '@angular/ssr';
import { BarberService } from './services/barber';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'barber/:id/feedback',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const barberService = new BarberService();
      const barbers = barberService.getBarbers();
      return barbers.map((barber) => ({ id: barber.id }));
    },
  },
  {
    path: 'barber/:id/stats',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const barberService = new BarberService();
      const barbers = barberService.getBarbers();
      return barbers.map((barber) => ({ id: barber.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
