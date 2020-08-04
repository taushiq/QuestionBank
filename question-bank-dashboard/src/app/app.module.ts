import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { QuestionBankListComponent } from './components/question-bank-list/question-bank-list.component';
import { QuestionBankDetailsComponent } from './components/question-bank-details/question-bank-details.component';
import { OptionPipe } from './pipes/option.pipe';
import { AddNewBankComponent } from './components/add-new-bank/add-new-bank.component';
import { AddNewQuestionComponent } from './components/add-new-question/add-new-question.component';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { LoginComponent } from './components/login/login.component';

;

// a 'Route' is an object that contains 'path'->'Component' mapping
// a 'path' is nothing but a URI segment
// For example, http://localhost:4200/home --> '/home' is the path
// For example, http://localhost:4200/customers --> '/customers' is the path
// For example, http://localhost:4200/customers/ANTON --> '/customers/<id>' is the path
// For example, http://localhost:4200/add-customer --> '/add-customer' is the path

const routeConfig: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-all',
    component: QuestionBankListComponent
  },
  {
    path: 'add-new-bank',
    component: AddNewBankComponent
  },
  {
    path: 'add-question',
    component: AddNewQuestionComponent
  },
  {
    path: 'update-question',
    component: UpdateQuestionComponent
  },

  {
    path: 'update-question/:question',
    component: UpdateQuestionComponent
  },

  {
    path: 'view-details/:bname/:author',
    component: QuestionBankDetailsComponent
  },

  {
    path: 'delete-question',
    component: DeleteQuestionComponent
    

  },
//   {
//     path: 'pipes-demo',
//     component: PipesDemoComponent
//   },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    // this is the default route handler; must be the last one.
    path: '**',
    component: PnfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PnfComponent,
    QuestionBankListComponent,
    QuestionBankDetailsComponent,
    OptionPipe,
    AddNewBankComponent,
    AddNewQuestionComponent,
    DeleteQuestionComponent,
    UpdateQuestionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
