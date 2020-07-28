import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.page.html',
  styleUrls: ['./expense-tracker.page.scss'],
})
export class ExpenseTrackerPage implements OnInit {


  balance;
  newBalance;
  expense;

  constructor(public storage: Storage) { }

  ngOnInit() {
   
    this.storage.get('expenseAmount').then(val => {
      this.expense = val;
      // this.balance = this.balance - this.expense;
    });

    if (this.expense>0){
      this.balance = this.balance - this.expense;
      this.storage.set('newbalance', this.balance);

      this.storage.get('newbalance').then(val => {
        this.balance = val;
      });
    }
    else if(this.expense === 0){
      this.storage.get('saving').then(val => {
        this.balance = val;
      });
    }
    this.storage.get('saving').then(val => {
      this.balance = val;
    });
    
  }


}
