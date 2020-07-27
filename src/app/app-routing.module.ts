import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'name-matching-game',
    loadChildren: () => import('./name-matching-game/name-matching-game.module').then( m => m.NameMatchingGamePageModule)
  },
  {
    path: 'expense-tracker',
    loadChildren: () => import('./expense-tracker/expense-tracker.module').then( m => m.ExpenseTrackerPageModule)
  },
  {
    path: 'contacts-app',
    loadChildren: () => import('./contacts-app/contacts-app.module').then( m => m.ContactsAppPageModule)
  },
  {
    path: 'student-app',
    loadChildren: () => import('./student-app/student-app.module').then( m => m.StudentAppPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
