import { Inject,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-select-questions',
  templateUrl: './select-questions.component.html',
  styleUrls: ['./select-questions.component.css']
})
export class SelectQuestionsComponent implements OnInit {

  questions: Array<any>= [];

  constructor(private router: Router, public service: QuestionBankService, private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      this.loadData();
    }
  }

  loadData(){
    this.service.getSelectedQuestions()
    .subscribe(resp =>{
      this.questions = resp;
      //console.log(this.questions);
    });
  }

  onChange(que: object, isChecked:boolean):void{
    if(isChecked){
      this.service.finalQuestions.push(que);
    }else{
      const index = this.service.finalQuestions.indexOf(que);
      if (index > -1) {
        this.service.finalQuestions.splice(index, 1);
        
      }

    }
  }


}
