import { Inject,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {

  questionbanks: Array<any> = [];
  names: Array<any> = [];
  authors: Array<any> = [];

  constructor(@Inject(DOCUMENT) document ,private router: Router, public service: QuestionBankService, private authService: AuthService,) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      this.loadData();
    }
  }

  loadData(){
    this.service.getAllQuestionBanksNoLimit()
    .subscribe(resp => {
      this.questionbanks = resp;
      this.service.questionBanks = resp;
    });
  }

  




  onChange(bname: string, author:string, i: number, isChecked: boolean){
    
    if(isChecked){
      this.names.push(bname);
      this.authors.push(author);
      this.service.names = [...this.names];
      this.service.authors = [...this.authors];
    }else{
      
      const index = this.names.indexOf(bname);
      if (index > -1) {
        this.names.splice(index, 1);
        
      }
      this.service.names = [...this.names];
    
    const indextwo = this.authors.indexOf(author);
      if (indextwo > -1) {
        this.authors.splice(indextwo, 1);
        
      }
      this.service.authors = [...this.authors];
    }
  }




}
