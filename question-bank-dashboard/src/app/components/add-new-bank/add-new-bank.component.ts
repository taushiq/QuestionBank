import { Component, OnInit } from '@angular/core';
import { QuestionBankService } from 'src/app/services/question-bank.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-new-bank',
  templateUrl: './add-new-bank.component.html',
  styleUrls: ['./add-new-bank.component.css']
})
export class AddNewBankComponent implements OnInit {

  // this variable gets automatically updated as an when the user
  // enters details in the textboxes (due to [(ngModel)] two-way data binding)
  qBank: any = {};

  constructor(private service: QuestionBankService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  }


  save(): void {
    this.service.addNewQuestionBank(this.qBank)
      .subscribe(
        () => this.router.navigate(['/view-all']), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
  }

}
