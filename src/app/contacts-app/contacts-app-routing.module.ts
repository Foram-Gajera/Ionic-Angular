import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAppPage } from './contacts-app.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsAppPageRoutingModule {}
