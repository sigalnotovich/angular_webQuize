import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../app.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // questions: Question[] = [];
  // answers: boolean[] = []; //true or false answer
  constructor() { }

  // @Input()
  // question : Question = new Question('',[],0) ;
  

  // @Input('question')
  // set add_question_to_array(question : Question){
  //   this.questions.push(question);
  //   console.log("questions.length: ", this.questions.length);
  // }

  @Input()
  currentQuestionNo : number = 0;

  @Input()
  questions : Question[] = [];

  @Input()
  answers: boolean[] = [];

  


  RedOrGreenBackground(QuestionNo : number){
    let style = {
      backgroundColor : 'green',
    }

    if (this.answers[QuestionNo - 1] == false){
      style = {
        backgroundColor : 'red',
      }
    }

    return style;
  }

  ngOnInit(): void {
  }

}
