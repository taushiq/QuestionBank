import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-question-bank-list',
  templateUrl: './question-bank-list.component.html',
  styleUrls: ['./question-bank-list.component.css']
})
export class QuestionBankListComponent implements OnInit {

  // pageNum: number = 1;
  questionbanks: Array<any> = [];
  // totalCustomers: number;
  lastPage: number;

  constructor(private router: Router, public service: QuestionBankService, private authService: AuthService,) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      this.loadData();
    }
  }

  loadData() {
    this.service.getAllQuestionBanks(this.service.pageNum)
      .subscribe(resp => {
        console.log('response',resp.data);
        this.questionbanks = resp.data;
        console.log('data',this.questionbanks)
        // this.totalCustomers = resp.count;
        this.lastPage = resp.count % 5 === 0 ? resp.count / 5 : Math.trunc(resp.count / 5) + 1;
      })
  }

  gotoPage(where: string = 'first') {
    switch (where) {
      case 'last':
        this.service.pageNum = this.lastPage;
        break;
      case 'prev':
        if (this.service.pageNum > 1) this.service.pageNum--;
        break;
      case 'next':
        if (this.service.pageNum < this.lastPage) this.service.pageNum++;
        break;
      default:
        this.service.pageNum = 1;
    }

    this.loadData();
  }

  getBtnClass(btn: string = 'first') {
    switch (btn) {
      case 'first':
      case 'prev':
        return this.service.pageNum === 1 ? 'btn-danger' : '';
      default:
        return this.service.pageNum === this.lastPage ? 'btn-danger' : '';
    }
  }
}
