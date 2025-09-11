import { Component, computed, inject, input, output, signal } from '@angular/core';
import { Card } from '../../../../shared/card/card';
import { PolicyStatusColorPipe } from '../../../../core/pipes/policy-status-color.pipe';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-policies-table',
  imports: [Card, PolicyStatusColorPipe, CommonModule, MatMenuModule, ReactiveFormsModule],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.scss'
})
export class PoliciesTable {
  fb = inject(FormBuilder);
  api = inject(ApiService);

  policies = input<any[]>([]);
  policyAdded = output();

  lossAvg = computed(() => this.getAvg('loss', true));
  addForm = signal<FormGroup>(this.fb.group({
    line: ['', Validators.required],
    effective: ['', Validators.required],
    expiration: ['', Validators.required],
    status: ['Active', Validators.required],
    expTech: ['', Validators.required],
    expPremium: ['', Validators.required],
    renevalToTech: ['', Validators.required],
    renevalTech: ['', Validators.required],
    renevalPremium: ['', Validators.required],
    rate: ['', Validators.required],
    loss: ['', Validators.required],
  }));
  showAddForm = signal(false);

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
  
    return count > 0 ? Math.round(sum / count) : 0;
  }

  addPolicy() {
    this.showAddForm.set(true);
  }

  savePolicy() {
    if (this.addForm()?.valid) {
      this.api.post('policies', this.addForm()?.value).pipe(take(1)).subscribe(() => this.policyAdded.emit());
      this.addForm()?.reset();
      this.showAddForm.set(false);
    }
  }

  cancelAdd() {
    this.addForm()?.reset();
    this.showAddForm.set(false);
  }

  editPolicy() {}
}
