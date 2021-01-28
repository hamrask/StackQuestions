import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-search-questions',
  templateUrl: './search-questions.component.html',
  styleUrls: ['./search-questions.component.scss']
})
export class SearchQuestionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  QuestionsList = new MatTableDataSource([]);
  displayedColumns: string[] = ['no', 'title', 'views', 'answers', 'action'];
  constructor(private service: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.searchQuestions();
    this.QuestionsList.paginator = this.paginator;
  }
  searchQuestions(): void {
    this.service.searchQuestions('desc', 'activity', 'angular').subscribe(data => {
      this.QuestionsList.data = data.items;
      this.QuestionsList.paginator = this.paginator;
    });
  }
  viewQuestion(questionId: string): void {
    this.router.navigate(['/', questionId]);
  }
}
