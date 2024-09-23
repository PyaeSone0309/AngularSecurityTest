import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// Your login component
import { StudentComponent } from './student.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
