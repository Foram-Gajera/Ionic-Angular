import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {


  submitted = false;
  formModel = {
    amount: null,
    tag: ''
  };
  savedBalance;

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.storage.get('saving').then(val => {
      this.savedBalance = val;
    });
    // tslint:disable-next-line:no-debugger
    // debugger;
    if (this.savedBalance < this.formModel.amount){
      // tslint:disable-next-line:no-debugger
      // debugger;
      alert('please enter expense less then your balance!');
    }

    else{
      this.storage.set('expenseAmount', this.formModel.amount);
      this.storage.set('tag', this.formModel.tag);
      this.router.navigateByUrl('/expense-tracker');
    }
    console.log(this.formModel);
  }

}
