import { Component, OnInit } from '@angular/core';
import { QuestionBankService } from 'src/app/services/question-bank.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {

 // this variable gets automatically updated as an when the user
  // enters details in the textboxes (due to [(ngModel)] two-way data binding)
  question: any = {};
  questionDummy: any = {};

  constructor(private service: QuestionBankService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  //   this.activatedRoute.params.subscribe(p => {
  //     //this.question = p;
  //     //this.questionDummy = p;
  //     //console.log('Here ',this.question);
  //     //this.service.deleteQuestion(this.question.question).subscribe();
  // });
}

  
 

  save(): void {
      this.service.addNewQuestion(this.question,this.service.bname,this.service.author)
      .subscribe(
        () => this.router.navigate(['/view-details/' + this.service.bname + '/' + this.service.author]), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
        
     
   }
    
  

}