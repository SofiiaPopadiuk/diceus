import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  data$!: Observable<any>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.data$ = this.api.get('dashboard');
  }
}
