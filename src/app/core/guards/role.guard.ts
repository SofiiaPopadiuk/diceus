import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleService {
  // Mock role
  private role: 'underwriter' | 'viewer' = 'underwriter';

  getRole() {
    return this.role;
  }
}

export const RoleGuard: CanActivateFn = (route, state) => {
  const roleService = inject(RoleService);
  const router = inject(Router);

  const role = roleService.getRole();
  const allowedRole = route.data['role'] as 'underwriter' | 'viewer';

  if (role === allowedRole) {
    return true;
  }

  router.navigate(['/forbidden']);
  return false;
};
