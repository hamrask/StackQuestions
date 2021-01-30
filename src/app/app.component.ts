import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CommonService } from './shared/common.service';
import { QuestionService } from './shared/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'StackQuestions';
  showLoader = new BehaviorSubject(false);
  ngOnInit(): void {
    this.service.showLoader.subscribe(data => {
      setTimeout(() => {
        this.showLoader.next(data);
      }, 100);
    });
  }
  constructor(private service: CommonService) {
  }
}
