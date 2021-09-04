import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { routes } from '../../../consts';
import { Userpilot } from 'userpilot';

@Injectable()
export class AuthGuard implements CanActivate{
  public routers: typeof routes = routes;

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      console.info('[Userpilot] Call Userpilot.reload() on page changes');
      console.warn('[Userpilot] If you want to trigger experiences on anonymous users, call `Userpilot.reload()` on every page change');
      Userpilot.reload();

      return true;
    } else {
      this.router.navigate([this.routers.LOGIN]);
    }
  }
}
