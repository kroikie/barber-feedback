import { Injectable } from '@angular/core';
import { Barber } from '../models/barber.model';

@Injectable({
  providedIn: 'root',
})
export class BarberService {
  private barbers: Barber[] = [
    { id: '1', name: 'John Doe', location: 'Downtown' },
    { id: '2', name: 'Jane Smith', location: 'Uptown' },
    { id: '3', name: 'Peter Jones', location: 'Midtown' },
  ];

  constructor() {}

  getBarbers(): Barber[] {
    return this.barbers;
  }

  getBarberById(id: string): Barber | undefined {
    return this.barbers.find((barber) => barber.id === id);
  }
}
