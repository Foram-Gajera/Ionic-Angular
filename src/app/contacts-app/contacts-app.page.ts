import { Component, OnInit } from '@angular/core';
import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';


@Component({
  selector: 'app-contacts-app',
  templateUrl: './contacts-app.page.html',
  styleUrls: ['./contacts-app.page.scss'],
})
export class ContactsAppPage implements OnInit {

  len = 0;

  contactType: ContactFieldType[] = ['displayName'];
  contactList = [];

  constructor(private contacts: Contacts) {
    this.search('');
  }

  ngOnInit() {
    // this.getContacts();
    // this.search('');
    // this.contacts.find(['displayName', 'phoneNumbers'], {multiple: true}).then(contact => {
    //   this.contactList = contact;
    // });

  }

  search(q){
    const option: IContactFindOptions = {
      filter: q
    };
    // this.contacts.find(['displayName', 'phoneNumbers'], {multiple: true}).then(contact => {
    //   this.contactList = contact;
    // });
    this.contacts.find(this.contactType, option).then(contact => {
      this.contactList = contact;
      this.len = this.contactList.length;
      console.log(JSON.stringify(contact[0]));
    });
  }

  onkeyup(ev){
    this.search(ev.target.value);
  }
}

