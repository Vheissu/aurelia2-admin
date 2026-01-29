import { IRouter, IRouteViewModel, Params, RouteNode } from '@aurelia/router';
import { AuthService } from './services/auth-service';
import { lifecycleHooks } from 'aurelia';

@lifecycleHooks()
export class AuthHook {
  static inject = [IRouter, AuthService];

  constructor(private router: IRouter, private authService: AuthService) {}

  canLoad(viewModel: IRouteViewModel, params: Params, next: RouteNode): boolean | string {
    const isLoginRoute = next.component.name === 'login';

    if (!this.authService.isAuthenticated && !isLoginRoute) {
      return 'login';
    }

    if (this.authService.isAuthenticated && isLoginRoute) {
      return '';
    }

    return true;
  }
}