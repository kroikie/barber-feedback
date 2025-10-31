import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WelcomeService } from '../../services/welcome';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit {
  private welcomeService = inject(WelcomeService);
  welcomeMessage$!: Observable<{ message: string }>;

  ngOnInit(): void {
    this.welcomeMessage$ = this.welcomeService.getWelcomeMessage();
  }
}
