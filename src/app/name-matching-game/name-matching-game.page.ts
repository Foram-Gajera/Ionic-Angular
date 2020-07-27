import { Component, OnInit } from '@angular/core';
import stringSimilarity from '../../../node_modules/string-similarity';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-name-matching-game',
  templateUrl: './name-matching-game.page.html',
  styleUrls: ['./name-matching-game.page.scss'],
})
export class NameMatchingGamePage implements OnInit {

  asciiName1 = [];
  asciiName2 = [];

  uniqueName1 = [];
  uniqueName2 = [];
// for(let i = 0; i < string.length; i ++){

// }
//   asciiName1.push(string[i].charCodeAt(0));

  formModel = {
    name1: '',
    name2: '',
    percentage: null
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    // this.formModel.percentage = this.MatchString();
    console.log(this.formModel);
    const x = this.formModel.name1;
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < x.length; index++) {
      this.asciiName1.push(x[index].charCodeAt(0));
    }

    const y = this.formModel.name2;

    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < y.length; index++) {
      this.asciiName2.push(y[index].charCodeAt(0));
    }

    console.log(this.asciiName1);
    console.log(this.asciiName2);


    this.asciiName1.forEach((c) => {
      if (!this.uniqueName1.includes(c)) {
          this.uniqueName1.push(c);
      }
    });
    this.asciiName2.forEach((c) => {
      if (!this.uniqueName2.includes(c)) {
          this.uniqueName2.push(c);
      }
    });
    this.formModel.percentage = this.compareArray(this.uniqueName1.sort(), this.uniqueName2.sort());
    // form.reset();
  }

  compareArray(arr1, arr2){
    const diffarray = [];
    let maxlen = 0;
    let samecount = 0;
    if (arr1.length > arr2.length){
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < arr1.length; i++) {
        // const element = array[i];
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < arr2.length; j++) {
          // const element = arr2[j];
          if (arr1[i] === arr2[j]){
            samecount ++;
          }
        }
      }
      maxlen = arr1.length;
    }
    else{
       // tslint:disable-next-line:prefer-for-of
       for (let i = 0; i < arr2.length; i++) {
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < arr1.length; j++) {
          // const element = arr2[j];
          if (arr1[j] === arr2[i]){
            samecount ++;
          }
        }
       }
       maxlen = arr2.length;
    }
    console.log(samecount);
    const per = (samecount / maxlen) * 100;
    console.log(per);
    return per;
  }


  MatchString(){
    const match = stringSimilarity.compareTwoStrings(this.formModel.name1, this.formModel.name2);
    const percentage = match * 100;
    console.log(percentage);
    return percentage;
  }
}
