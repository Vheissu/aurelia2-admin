import Aurelia from 'aurelia';
import { App } from './app';
import { RouterConfiguration } from '@aurelia/router';
import { AuthHook } from './auth-hook';

Aurelia
  .register(RouterConfiguration, AuthHook)
  .app(App)
  .start();
