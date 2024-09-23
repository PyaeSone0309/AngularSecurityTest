import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _service : AuthService,private _router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.checkAuth();
  }

  private  checkAuth() {
    if ( this._service.isLoggedIn()) {
      return true;
    } else {
      this._router.navigateByUrl('login')
      return false;
    }
  }
  
}
