import { Component, OnInit } from '@angular/core';
import { QuestionBankService } from '../../services/question-bank.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-question-bank-details',
  templateUrl: './question-bank-details.component.html',
  styleUrls: ['./question-bank-details.component.css']
})
export class QuestionBankDetailsComponent implements OnInit {

  public questions;
  public count;
  public bankName;
  public author;
  mySubscription: any;

  constructor(public service: QuestionBankService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { 

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
        }
      });
    }

  ngOnInit(): void { 
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {

    //   this.activatedRoute.params.subscribe(p => {
    //     this.service.getOneCustomer(p['customerId'])
    //       .subscribe(data => this.cust = data);
    //   });
    // }

    this.activatedRoute.params.subscribe(p => {
          this.service.getQuestionBank(p['bname'],p['author'])
             .subscribe(resp => {
              console.log('response',resp.data);
              this.questions = resp.data;
              console.log('data',this.questions)
              // this.totalCustomers = resp.count;
              this.count = resp.count;
              this.bankName = resp.name;
              this.author = p['author'];
            });
         });
       }
      }

       delete(question: string): void{
          this.service.deleteQuestion(question)
          .subscribe(
            () => {this.router.navigate([`/view-details/${this.bankName}/${this.author}`])}, // success callback
            () => window.alert('There was an error! Please check the console logs.') // error callback
          );
       }

       deleteBank():void{
         this.service.deleteQuestionBank()
         .subscribe(
          () => {this.router.navigate([`/view-all`])}, // success callback
          () => window.alert('There was an error! Please check the console logs.') // error callback

         );
       }

       ngOnDestroy() {
        if (this.mySubscription) {
          this.mySubscription.unsubscribe();
        }
      }


  

}

