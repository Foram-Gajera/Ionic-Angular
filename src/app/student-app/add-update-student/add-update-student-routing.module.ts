import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUpdateStudentPage } from './add-update-student.page';

const routes: Routes = [
  {
    path: '',
    component: AddUpdateStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpdateStudentPageRoutingModule {}
