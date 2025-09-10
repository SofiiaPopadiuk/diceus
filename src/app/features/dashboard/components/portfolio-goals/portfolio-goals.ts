import { Component, computed, input, signal } from '@angular/core';
import { Card } from '../../../../shared/card/card';

@Component({
  selector: 'app-portfolio-goals',
  imports: [Card],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss'
})
export class PortfolioGoals {
  portfolioGoals = input<any>();

  lossRatio = computed(() => {
    const lossRatio = this.portfolioGoals()?.lossRatio;
    return {
      ...lossRatio,
      delta: (lossRatio?.value - lossRatio?.target).toFixed(1),
      status: this.portfolioGoalsRanges()?.find(range => lossRatio?.value >= range.min && lossRatio?.value < range.max)?.status
    }
  });

  renewalRetention = computed(() => {
    const renewalRetention = this.portfolioGoals()?.renewalRetention;
    return {
      ...renewalRetention,
      status: this.renewalRetentionRanges()?.find(range => renewalRetention?.value >= range.min && renewalRetention?.value < range.max)?.status
    }
  });

  newBusiness = computed(() => {
    const newBusiness = this.portfolioGoals()?.newBusiness;
    return {
      ...newBusiness,
      percent: (newBusiness?.value / newBusiness?.target * 100).toFixed(1),
    }
  });

  annualGWP = computed(() => {
    const annualGWP = this.portfolioGoals()?.annualGWP;
    return {
      ...annualGWP,
      percent: (annualGWP?.value / annualGWP?.target * 100).toFixed(1)
    }
  });

  portfolioGoalsRanges = signal([
    { 'min': 0, 'max': 50, 'color': '#3bb979', status: 'GOOD' },
    { 'min': 50, 'max': 70, 'color': '#fdd261', status: 'NORMAL' },
    { 'min': 70, 'max': 100, 'color': '#cc0101', status: 'BAD' }
  ]);

  renewalRetentionRanges = signal([
    { 'min': 0, 'max': 15, 'color': '#cc0101', status: 'BAD' },
    { 'min': 15, 'max': 85, 'color': '#fdd261', status: 'NORMAL' },
    { 'min': 85, 'max': 90, 'color': '#3bb979', status: 'ON TARGET'  },
    { 'min': 90, 'max': 100, 'color': '#fdd261', status: 'NORMAL' }
  ]);

  getLossRatioStatusColor(status: string) {
    return this.portfolioGoalsRanges()?.find(range => range?.status === status)?.color;
  }

  getRenewalRetentioStatusColor(status: string) {
    return this.renewalRetentionRanges()?.find(range => range?.status === status)?.color;
  }
}
