import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { WorkQueue } from './components/work-queue/work-queue';
import { AsyncPipe } from '@angular/common';
import { PortfolioGoals } from './components/portfolio-goals/portfolio-goals';
import { QuickActions } from './components/quick-actions/quick-actions';

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, AsyncPipe, PortfolioGoals, QuickActions],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  workQueue$!: Observable<any>;
  portfolioGoals$!: Observable<any>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.workQueue$ = this.api.get('workQueue');
    this.portfolioGoals$ = this.api.get('portfolioGoals');
  }
}
