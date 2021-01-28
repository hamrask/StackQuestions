import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-search-questions',
  templateUrl: './search-questions.component.html',
  styleUrls: ['./search-questions.component.scss']
})
export class SearchQuestionsComponent implements OnInit {
  QuestionsList = [];
  displayedColumns: string[] = ['no', 'title', 'views', 'answers', 'action'];
  constructor(private service: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.searchQuestions();
  }
  searchQuestions(): void {
    this.service.searchQuestions('desc', 'activity', 'angular').subscribe(data => {
      this.QuestionsList = data.items;
    });
  }
  viewQuestion(questionId: string): void {
    this.router.navigate(['/', questionId]);
  }
}
