import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseTrackerPage } from './expense-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseTrackerPage
  },
  {
    path: 'add-saving',
    loadChildren: () => import('./add-saving/add-saving.module').then( m => m.AddSavingPageModule)
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  },
  {
    path: 'view-history',
    loadChildren: () => import('./view-history/view-history.module').then( m => m.ViewHistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseTrackerPageRoutingModule {}
