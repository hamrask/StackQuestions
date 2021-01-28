import { Component, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StackQuestions';
  
  ngOnInit(): void {

  }
  constructor(private service: QuestionService) {
    
  }
}
