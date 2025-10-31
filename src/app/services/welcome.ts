import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private http = inject(HttpClient);

  getWelcomeMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>('/api/welcome');
  }
}
