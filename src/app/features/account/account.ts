import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoliciesTable } from './components/policies-table/policies-table';
import { Observable } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [PoliciesTable, AsyncPipe],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account {
  route = inject(ActivatedRoute);
  api = inject(ApiService);

  account: any;
  policies$!: Observable<any>;

  ngOnInit(): void {
    this.account = this.route.snapshot.data['account']; // resolved data
    this.policies$ = this.api.get('policies');
  }

  updatePolicies() {
    this.policies$ = this.api.get('policies');
  }
}
