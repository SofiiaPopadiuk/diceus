import { Component, computed, input, signal } from '@angular/core';
import { WorkItem } from '../../../../core/interfaces/dashboard.interfaces';
import { Card } from '../../../../shared/card/card';
import { StatusColorPipe } from '../../../../core/pipes/status-color.pipe';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-work-queue',
  imports: [Card, StatusColorPipe, NgStyle],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss'
})
export class WorkQueue {
  workItems = input<WorkItem[]>([]);

  // Computed counts
  counts = computed(() => ({
    Assigned: this.workItems()?.length,
    Pending: this.workItems()?.filter(item => item.status === 'Pending Review').length,
    Referrals: this.workItems()?.filter(item => item.status === 'Completed').length,
  }));

  // Tabs as computed array of objects
  tabs = computed(() =>
    Object.entries(this.counts()).map(([name, count]) => ({ name, count }))
  );

  // Active tab
  activeTab = signal(this.tabs()[0]?.name || '');

  // Filtered items for table
  filteredItems = computed(() =>
    this.workItems()?.filter(item => {
      if (this.activeTab() === 'Assigned') return item;
      if (this.activeTab() === 'Pending') return item.status === 'Pending Review';
      if (this.activeTab() === 'Referrals') return item.status === 'Completed';
      return true;
    })
  );

  setActiveTab(tabName: string) {
    this.activeTab.set(tabName);
  }
}
