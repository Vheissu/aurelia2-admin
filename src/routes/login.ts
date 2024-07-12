import { IRouter } from '@aurelia/router-lite';
import { AuthService } from '../services/auth-service';

export class Login {
  static inject = [IRouter, AuthService];

  private email: string = '';
  private password: string = '';
  private errorMessage: string = '';

  constructor(private router: IRouter, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.load('');
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}