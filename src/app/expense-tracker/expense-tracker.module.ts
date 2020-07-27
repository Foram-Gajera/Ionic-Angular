import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';

import { ExpenseTrackerPageRoutingModule } from './expense-tracker-routing.module';

import { ExpenseTrackerPage } from './expense-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseTrackerPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ExpenseTrackerPage]
})
export class ExpenseTrackerPageModule {}
