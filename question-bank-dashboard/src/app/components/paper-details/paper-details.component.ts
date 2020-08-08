import { Component, OnInit } from '@angular/core';
import { QuestionBankService } from 'src/app/services/question-bank.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-paper-details',
  templateUrl: './paper-details.component.html',
  styleUrls: ['./paper-details.component.css']
})
export class PaperDetailsComponent implements OnInit {

  constructor(public service: QuestionBankService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    
  }

}
