// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  // constructor(private authService: AuthService, private router: Router) {}
  // canActivate(): boolean | UrlTree {
  //   const loggedIn = this.authService.isLoggedIn();
  //   if (!loggedIn) {
  //     // redirect to login page
  //     return this.router.createUrlTree(['/login']);
  //   }
  //   return true; // allow access
  // }
}
