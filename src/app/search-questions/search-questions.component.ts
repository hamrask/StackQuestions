import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  QuestionDataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['no', 'title', 'views', 'answers', 'action'];
  questionFilterForm: FormGroup;
  constructor(private service: QuestionService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.QuestionDataSource.paginator = this.paginator;
  }
  searchQuestions(body): void {
    this.service.searchQuestions(body).subscribe(data => {
      this.QuestionDataSource.data = data.items;
      this.QuestionDataSource.paginator = this.paginator;
    });
  }
  viewQuestion(questionId: string): void {
    this.router.navigate(['/', questionId]);
  }
  resetResult(): void {
    this.QuestionDataSource.data = [];
    this.QuestionDataSource.paginator = this.paginator;
  }
}
