import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAppPage } from './student-app.page';

const routes: Routes = [
  {
    path: '',
    component: StudentAppPage
  },
  {
    path: 'add-update-student',
    loadChildren: () => import('./add-update-student/add-update-student.module').then( m => m.AddUpdateStudentPageModule)
  },
  {
    path: 'add-update-student/:id',
    loadChildren: () => import('./add-update-student/add-update-student.module').then( m => m.AddUpdateStudentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAppPageRoutingModule {}
