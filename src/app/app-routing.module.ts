import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthRedirectGuard } from './core/guards/auth-redirect.guard';

const routes: Routes = [
  {
    path : 'studentList',
    loadChildren : ()=> import('./student/student.module').then(m => m.StudentModule),
    canActivate : [AuthGuard],
    // canActivateChild : [AuthGuard]
  },
  {
    path : 'login',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate : [AuthRedirectGuard]
  },
  {
    path: '',
    pathMatch : 'full',
    redirectTo : '/studentList',
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
