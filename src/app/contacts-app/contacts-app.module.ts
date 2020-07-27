import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsAppPageRoutingModule } from './contacts-app-routing.module';

import { ContactsAppPage } from './contacts-app.page';
import { Contacts } from '@ionic-native/contacts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsAppPageRoutingModule
  ],
  declarations: [ContactsAppPage],
  providers: [
    Contacts
  ]
})
export class ContactsAppPageModule {}
