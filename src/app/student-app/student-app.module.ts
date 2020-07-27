import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentAppPageRoutingModule } from './student-app-routing.module';

import { StudentAppPage } from './student-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAppPageRoutingModule
  ],
  declarations: [StudentAppPage]
})
export class StudentAppPageModule {}
