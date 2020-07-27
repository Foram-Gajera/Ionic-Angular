import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AddUpdateStudentPageRoutingModule } from './add-update-student-routing.module';

import { AddUpdateStudentPage } from './add-update-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddUpdateStudentPageRoutingModule
  ],
  declarations: [AddUpdateStudentPage]
})
export class AddUpdateStudentPageModule {}
