import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;

  login(username: string, password: string): boolean {
    // In real apps, validate credentials with backend
    if (username === 'admin' && password === '1234') {
      this.isLoggedInStatus = true;
      localStorage.setItem('token', 'sample-token');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Example check
    return this.isLoggedInStatus || !!localStorage.getItem('token');
  }
}
