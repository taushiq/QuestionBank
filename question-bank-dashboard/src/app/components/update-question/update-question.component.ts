import { Component, OnInit } from '@angular/core';
import { QuestionBankService } from '../../services/question-bank.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  ques: any = {};

  constructor(private service: QuestionBankService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
    this.activatedRoute.params.subscribe(p => {
          this.ques = JSON.parse(JSON.stringify(p));;
        });
    this.service.deleteQuestion(this.ques.question).subscribe();
    }
  }

  save(): void{
    console.log(this.ques);
    
    this.service.addNewQuestion(this.ques,this.service.bname,this.service.author)
    .subscribe(
      () => this.router.navigate([`/view-details/${this.service.bname}/${this.service.author}`]), // success callback
      () => window.alert('There was an error! Please check the console logs.') // error callback
    );
  }


}
