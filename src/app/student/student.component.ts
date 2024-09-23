import { Component } from '@angular/core';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  constructor(private _service : AuthService,private _router : Router){}

  onClick(){
    // Here you need to call logout api 
    this._service.logOut();
    this._router.navigateByUrl('/login')
  }

}
