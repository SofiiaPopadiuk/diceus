import { Component, signal, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent {
  private router = inject(Router);

  links = [
    { label: 'Dashboard', path: 'dashboard', icon: 'fa-solid fa-house' },
    { label: 'Accounts', path: 'account/101', icon: 'fa-solid fa-database' },
  ];
  tabChange = output<string>();

  activeTab = signal<string>('');

  private routerSub: Subscription;

  constructor() {
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const segments = event.urlAfterRedirects.slice(1);
        const currentPath = segments || this.links[0].path;
        this.activeTab.set(currentPath);
        this.tabChange.emit(currentPath);
      });
  }

  setActive(path: string) {
    this.activeTab.set(path);
    this.tabChange.emit(path);
    this.router.navigate([path]);
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
