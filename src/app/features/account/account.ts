import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account {
  account: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.account = this.route.snapshot.data['account']; // resolved data
  }
}
