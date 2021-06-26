import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../app.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  
  @Output()
  nextClicked: EventEmitter<string> = new EventEmitter<string>();

  clickNext(){
    // console.log("nextClicked");
    this.nextClicked.emit();
  }

  @Output()
  answerChoosen : EventEmitter<number> = new EventEmitter<number>();

  choosenAnswer(answerNo : number){
      console.log("choosen answer no:", answerNo);
      this.answerChoosen.emit(answerNo);
  }

  @Input()
    question : Question = new Question('',[],0) ;

  constructor() { }

  ngOnInit(): void {
  }

}
