import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-saving',
  templateUrl: './add-saving.page.html',
  styleUrls: ['./add-saving.page.scss'],
})
export class AddSavingPage implements OnInit {

  submitted = false;
  formModel = {
    saving: null
  };
  oldsaving;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // this.storage.get('saving').then(val => {
    //   this.oldsaving = val;
    // });
    alert(this.oldsaving);
    this.submitted = true;
    this.storage.set('saving', this.formModel.saving);
    alert(this.formModel.saving);
    this.router.navigateByUrl('/expense-tracker');
  }

}
