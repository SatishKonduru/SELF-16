import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean | UrlTree {
    const isAdmin = this.authService.isAdmin();

    if (!isAdmin) {
      // Redirect non-admin users
      return this.router.createUrlTree(['/unauthorized']);
    }

    return true;
  }
}
