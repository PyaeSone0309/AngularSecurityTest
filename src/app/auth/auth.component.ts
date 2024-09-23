import { Component } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  constructor(private _service : AuthService,private _router : Router){}

  onClick(){
    // Right here login api will call and if login success call setting token method to local
    this._service.login('Pyae sone aung','This is token')
    this._router.navigateByUrl('/studentList')
  }
}
