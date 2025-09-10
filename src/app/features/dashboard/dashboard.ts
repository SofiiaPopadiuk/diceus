import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { WorkQueue } from './components/work-queue/work-queue';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [WorkQueue, AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  workQueue$!: Observable<any>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.workQueue$ = this.api.get('workQueue');
  }
}
