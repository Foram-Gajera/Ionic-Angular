import { Component, OnInit } from '@angular/core';
import stringSimilarity from '../../../node_modules/string-similarity';

@Component({
  selector: 'app-name-matching-game',
  templateUrl: './name-matching-game.page.html',
  styleUrls: ['./name-matching-game.page.scss'],
})
export class NameMatchingGamePage implements OnInit {

  formModel = {
    name1: '',
    name2: '',
    percentage: null
  };
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    this.formModel.percentage = this.MatchString();
    // alert('form' + this.formModel);
    console.log(this.formModel);
  }


  MatchString(){
    const match = stringSimilarity.compareTwoStrings(this.formModel.name1, this.formModel.name2);
    const percentage = match * 100;
    console.log(percentage);
    return percentage;
  }
}
