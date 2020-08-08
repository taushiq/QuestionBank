import { Inject,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-paper-type',
  templateUrl: './question-paper-type.component.html',
  styleUrls: ['./question-paper-type.component.css']
})
export class QuestionPaperTypeComponent implements OnInit {

  questionbanks: Array<any> = [];
  names: Array<any> = [];
  self = this;
  value: any;
  count: number = 0;
  noOfQuestions:number;
  constructor(private router: Router, public service: QuestionBankService, private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.service.finalQuestions = [];
    this.service.noOfQuestions = 0;
    this.service.tempquestions = [];
    this.names = [...this.service.names];
    //this.questionbanks = this.service.questionBanks;
    for (let key in this.service.questionBanks) { 
      if (this.service.questionBanks.hasOwnProperty(key)) { 
          this.value = this.service.questionBanks[key]; 
          if(this.names.includes(this.value.bname)) {
            this.questionbanks.push(this.value);
            this.count = this.count + this.value.no_of_questions;
            
          }
      } 
  }
  //console.log(this.count);

  }

  save(): boolean{
    //console.log('Working',this.noOfQuestions,this.names, this.service.type);
    this.service.noOfQuestions = this.noOfQuestions;
    if(this.service.type === 1){
      this.service.getSelectedQuestions()
    .subscribe(resp =>{
      this.service.tempquestions = resp;
      //console.log('Total Questions',this.service.tempquestions);
    });
    return false;
  }
}

  onChangeOne(isChecked:boolean): void{
    if(isChecked) {
      this.service.type = 1;
    }else{
      this.service.type = 2;
    }
  }

  onChangeTwo(isChecked:boolean): void{
    if(isChecked) {
      this.service.type = 2;
    }else{
      this.service.type = 1;
    }
  }

  
  
}
