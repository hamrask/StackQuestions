import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  // search questions with give parameters
  searchQuestions(orderBy: string, sortBy: string, inTitle: string): Observable<any> {
    const url = environment.baseUrl + `search?order=${orderBy}&sort=${sortBy}&intitle=${inTitle}&site=stackoverflow`;
    return this.http.get(url);
  }
  // get question details with question Id
  getQuestionByQuestionId(questionId: string): Observable<any> {
    const url = environment.baseUrl + `questions/${questionId}?site=stackoverflow`;
    return this.http.get(url);
  }
}
