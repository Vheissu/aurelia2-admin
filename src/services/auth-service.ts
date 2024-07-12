import { IEventAggregator } from 'aurelia';

export class AuthService {
  private _isAuthenticated: boolean = false;

  static inject = [IEventAggregator];

  constructor(private ea: IEventAggregator) {
    this._isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  login(email: string, password: string): boolean {
    if (email === 'admin@example.com' && password === 'password') {
      this._isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      this.ea.publish('auth:change', true);
      return true;
    }
    return false;
  }

  logout(): void {
    this._isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    this.ea.publish('auth:change', false);
  }
}