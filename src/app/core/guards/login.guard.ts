import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const permission = false;

  if(permission) {
    router.navigate(['home']);
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
