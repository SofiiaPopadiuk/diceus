import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class AccountResolver implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.api.get(`accounts/${id}`);
  }
}
