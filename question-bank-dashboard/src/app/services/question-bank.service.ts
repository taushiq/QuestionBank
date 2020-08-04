import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map'; // npm i rxjs-compat
// import { AuthService } from './auth.service';

const baseUrl = 'http://localhost:3000/questionbanks';


// injectables are singletons (Angular creates a single instance of this class)
@Injectable({
  providedIn: 'root'
})
export class QuestionBankService {
  bname: string;
  author: string;
  pageNum: number = 1;

  constructor(private http: HttpClient, private authService: AuthService) { }

  // addNewCustomer(customer: any): Observable<any> {
  //   const options = {
  //     headers: {
  //       'authorization': 'Bearer ' + this.authService.token
  //     }
  //   };
  //   return this.http.post(baseUrl, customer, options);
  // }

  addNewQuestionBank(questionBank: any): Observable<any> {
    const options = {
          headers: {
            'authorization': 'Bearer ' + this.authService.token
          }
        };
    return this.http.post(baseUrl + '/addquestionbank', questionBank, options);
  }

  addNewQuestion(question: any,bname: string, author: string): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.post(baseUrl + '/addquestion' + '/' + bname + '/' + author, question, options );
  }

  // getAllCustomers(pageNum: number = 1): Observable<any> {
  //   const options = {
  //     headers: {
  //       'authorization': 'Bearer ' + this.authService.token
  //     }
  //   };
  //   return this.http
  //     .get(baseUrl + '?page=' + pageNum, options);
  // }


  getAllQuestionBanks(pageNum: number = 1): Observable<any> {
    const options = {
          headers: {
            'authorization': 'Bearer ' + this.authService.token
          }
        };
    return this.http
      .get(baseUrl + '?page=' + pageNum, options);
  }

  // getOneCustomer(custId: string): Observable<any> {
  //   custId = custId.toUpperCase();
  //   const options = {
  //     headers: {
  //       'authorization': 'Bearer ' + this.authService.token
  //     }
  //   };
  //   return this.http.get(baseUrl + '/' + custId, options);
  // }


  getQuestionBank(bname: string, author: string): Observable<any> {
    this.bname = bname;
    this.author = author;
    const options = {
          headers: {
            'authorization': 'Bearer ' + this.authService.token
          }
        };
    
    return this.http.get(baseUrl + '/' + bname + '/' + author, options);
  }

  deleteQuestion(question: string): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.delete(baseUrl + '/deletequestion/' + this.bname + '/' + this.author + '/' + question, options);
  }

  deleteQuestionBank(): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.delete(baseUrl + '/deletequestionbank/' + this.bname + '/' + this.author, options);
  }

}
