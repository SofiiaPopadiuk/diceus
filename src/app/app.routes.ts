import { Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { AccountResolver } from './core/resolvers/account.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
    data: { role: 'underwriter' },
    canActivate: [RoleGuard],
  },

  {
    path: 'account/:id',
    loadComponent: () => import('./features/account/account').then(m => m.Account),
    data: { role: 'underwriter' },
    canActivate: [RoleGuard],
    resolve: { account: AccountResolver },
  },
];
