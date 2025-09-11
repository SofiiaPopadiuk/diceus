import { Component, computed, input } from '@angular/core';
import { Card } from '../../../../shared/card/card';
import { PolicyStatusColorPipe } from '../../../../core/pipes/policy-status-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-policies-table',
  imports: [Card, PolicyStatusColorPipe, CommonModule],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.scss'
})
export class PoliciesTable {
  policies = input<any[]>([]);

  lossAvg = computed(() => this.getAvg('loss', true));

  getAvg(field: string, filterNull = false): number {
    const policies = this.policies() ?? [];
  
    const { sum, count } = policies.reduce(
      (acc, item) => {
        const value = Number(item?.[field]);
  
        // Skip if filterNull is true and value is falsy/NaN
        if (filterNull && !value) return acc;
  
        if (!isNaN(value)) {
          acc.sum += value;
          acc.count++;
        }
        return acc;
      },
      { sum: 0, count: 0 }
    );
  
    return count > 0 ? sum / count : 0;
  }
}
