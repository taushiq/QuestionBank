import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddNewBankComponent } from '../add-new-bank/add-new-bank.component';
import { QuestionBankService } from 'src/app/services/question-bank.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  constructor(private service: QuestionBankService) { }

  ngOnInit(): void {
  }

 
  }



