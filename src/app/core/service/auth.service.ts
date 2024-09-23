import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router : Router) { }

  login(userName : string,token : string) : void {
    localStorage.setItem('username',userName);
    localStorage.setItem('token',token)
  }

  logOut(): void {
    localStorage.clear();
    this._router.navigateByUrl('/login');
  }

  isLoggedIn() : boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }else {
      return false;
    }
  }

  get getToken() {
    const token = localStorage.getItem('token');
    if (!token || token == null) {
        return null
    }
    return token;
}

}
