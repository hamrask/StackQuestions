import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchQuestionsComponent } from './search-questions/search-questions.component';
import { ViewQuestionComponent } from './view-question/view-question.component';

const routes: Routes = [
  {
    path: '',
    component: SearchQuestionsComponent
  },
  {
    path: ':id',
    component: ViewQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
