import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { queueScheduler } from 'rxjs';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {
questionDetails: any;
  constructor(private route: ActivatedRoute, private service: QuestionService) { }

  ngOnInit(): void {
    this.getQuestionByQuestionId();
  }
  // get question details by question Id
  getQuestionByQuestionId(): void {
    const questionId = this.route.snapshot.params.id;
    if (questionId) {
      this.service.getQuestionByQuestionId(questionId).subscribe(data => {
        this.questionDetails = data;
      });
    }
  }
}
