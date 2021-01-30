import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-question-filters',
  templateUrl: './question-filters.component.html',
  styleUrls: ['./question-filters.component.scss']
})
export class QuestionFiltersComponent implements OnInit {
  questionFilterForm: FormGroup;
  // tslint:disable-next-line:no-output-native
  @Output() filterSubmit = new EventEmitter<boolean>();
  // tslint:disable-next-line:no-output-native
  @Output() reset = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private service: QuestionService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.questionFilterForm = this.fb.group({
      page: [null],
      pagesize: [null],
      fromdate: [null],
      todate: [null],
      order: [null],
      min: [null],
      max: [null],
      sort: [null],
      q: [null],
      accepted: [null],
      answers: [null],
      body: [null],
      closed: [null],
      migrated: [null],
      notice: [null],
      nottagged: [null],
      tagged: [null],
      title: [null],
      user: [null],
      url: [null],
      views: [null],
      wiki: [null]
    });
  }
  submitFilters(): void {
    console.log(this.questionFilterForm.value);
    let formValue = this.questionFilterForm.value;
    formValue = this.service.buildFilterQueryString(formValue);
    this.filterSubmit.emit(formValue);
  }
  resetResults(): void {
    this.reset.emit(true);
  }
}
