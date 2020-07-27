import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NameMatchingGamePage } from './name-matching-game.page';

const routes: Routes = [
  {
    path: '',
    component: NameMatchingGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NameMatchingGamePageRoutingModule {}
