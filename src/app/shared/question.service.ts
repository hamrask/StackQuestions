import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  // search questions with give parameters
  searchQuestions(queryString): Observable<any> {
    const url = environment.baseUrl + `search/advanced?${queryString}`;
    return this.http.get(url);
  }
  // get question details with question Id
  getQuestionByQuestionId(questionId: string): Observable<any> {
    const url = environment.baseUrl + `questions/${questionId}?site=stackoverflow`;
    return this.http.get(url);
  }
  getEpochTime(date: Date): number {
    return date.getTime();
  }
  buildFilterQueryString(body: any): string{
    let queryString = '';
    Object.keys(body).forEach((element, index) => {
      if (body[element] && typeof body[element] === 'string') {
          queryString = queryString + `${element}=${body[element]}&`;
      }
      if (body[element] && typeof body[element].getDate === 'function') {
          queryString = queryString + `${element}=${this.getEpochTime(body[element])}&`;
      }
    });
    queryString = queryString + `site=stackoverflow`;
    return queryString;
  }
}
