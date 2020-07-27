import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NameMatchingGamePageRoutingModule } from './name-matching-game-routing.module';

import { NameMatchingGamePage } from './name-matching-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NameMatchingGamePageRoutingModule
  ],
  declarations: [NameMatchingGamePage]
})
export class NameMatchingGamePageModule {}
