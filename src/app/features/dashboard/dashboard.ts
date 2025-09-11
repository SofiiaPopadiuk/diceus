import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { WorkQueue } from './components/work-queue/work-queue';
import { AsyncPipe } from '@angular/common';
import { PortfolioGoals } from './components/portfolio-goals/portfolio-goals';
import { QuickActions } from './components/quick-actions/quick-actions';
import { MarketIntelligence } from './components/market-intelligence/market-intelligence';

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, AsyncPipe, PortfolioGoals, QuickActions, MarketIntelligence],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  api = inject(ApiService);

  workQueue$!: Observable<any>;
  portfolioGoals$!: Observable<any>;

  ngOnInit(): void {
    this.workQueue$ = this.api.get('workQueue');
    this.portfolioGoals$ = this.api.get('portfolioGoals');
  }
}
