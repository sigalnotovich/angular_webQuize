import { Component } from '@angular/core';


export class Question{
  caption: string = '';
  answers: string[] = [];
  correctAnswer: number = 0;

  getCaption(){
    return this.caption;
  }

  getAnswers(){
    return this.answers;
  }

  getCorrectAnswer(){
    return this.correctAnswer;
  }

  constructor(caption:string, answers:string[],correctAnswer: number){
    this.caption = caption;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //DATA:
  // title = 'Project-one-Angular-Pop-Quiz';
  currentQuestionNo : number = 1;
  score : number = 0;
  Questions : Question[] = [];
  answerArray: boolean[] =[]; //correct(ture) or incorrect(false) answer 
  // curAnswer : number = 0;
  

  Q1 = new Question("whats your name?",["sigal","jonh lennon","barbara stricen","dua lipa"],1);
  Q2 = new Question("whats your favorite candy?",["lolypop","chocolate cake","milka","donat"],2);
  Q3 = new Question("whats the best vocal singer ever?",["jessy J","arriana grande","dua lipa","shiri maymon"],1);
  Q4 = new Question("when will you go to sleep?",["2100","2200","2300","2330"],3);

  QuesionsList = [this.Q1,this.Q2,this.Q3,this.Q4];


  //todo: update currentQuestionNo,score,answerArray/cur_answer
  nextClickedFather(valueEmmited: string){
    this.currentQuestionNo += 1;
    console.log("currentQuestionNo is: " + this.currentQuestionNo);
  }

  answerChoosenFather(QuestionNo : number, valueEmmited : number){
    if (valueEmmited == this.QuesionsList[QuestionNo-1].correctAnswer){
        this.answerArray[QuestionNo-1] = true;
    }
    else{
      this.answerArray[QuestionNo-1] = false;
    }
    console.log("answerArray: ", this.answerArray);
    
  }

  //startQuiz() ?
}




