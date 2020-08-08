import { Inject,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionBankService } from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-random-final',
  templateUrl: './random-final.component.html',
  styleUrls: ['./random-final.component.css']
})
export class RandomFinalComponent implements OnInit {
  heading: string;
  questions: Array<any> = [];
  constructor(private router: Router, public service: QuestionBankService, private authService: AuthService) { }
  
  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }

    this.heading = this.service.heading;
    if(this.service.type === 1){
      let random: number;
    for(var i = 0 ; i < this.service.noOfQuestions ; i++ ){
      while(true){
        //console.log('Questions', this.service.tempquestions);
        random = Math.random();
        random = Math.floor((random*this.service.tempquestions.length));
        //console.log(random);
        //console.log(this.service.finalQuestions);
        //console.log(this.service.tempquestions[random]);
      if(this.service.finalQuestions.includes(this.service.tempquestions[random])){
        //console.log('If');
      }else{
        this.service.finalQuestions.push(this.service.tempquestions[random]);
        //console.log('Else');
        break;
      }
      }
      
    
    }

    }
    


    }




  htmltoPDF()
{
    
  //   //parentdiv isn = this.service.finalQuestions[0];
  var doc = new jsPDF();
  var pageHeight= doc.internal.pageSize.height;

  // Before adding new content
  var textWidth = doc.getStringUnitWidth(this.service.heading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
  var textWidthone = doc.getStringUnitWidth(this.service.subHeading) * doc.internal.getFontSize() / doc.internal.scaleFactor;
  var textOffsetone = (doc.internal.pageSize.width - textWidthone) / 2;
  
  doc.setFont("helvetica");
  doc.setFontStyle("normal");
  doc.setFontSize(16);
  doc.text(this.service.heading, textOffset, 20);
  doc.setFont("times");
  doc.setFontStyle("normal");
  doc.setFontSize(16);
  doc.text(this.service.subHeading, textOffsetone, 30);
  doc.setFontStyle("normal");
  doc.setFontSize(12);
  doc.text('Date',10, 45);
  doc.text('Signature', 140, 45);
  doc.line(10, 50 , 200 , 50);


  doc.setFontSize(12);
  var gap = 55;
  for(var i = 0; i<this.service.finalQuestions.length ; i++ ){
    //console.log(gap);
    //console.log(pageHeight);
    
    if ((gap+70) >= pageHeight)
    {
      //console.log("Inside If");
      //console.log("Page Added");
      doc.addPage();
      gap = 0 // Restart height position
      //console.log(this.service.finalQuestions[i].question);
    }else{
      //console.log("Inside Else");
      //console.log(this.service.finalQuestions[i].question);
      
    }
    doc.setFontSize(16);
    doc.text('Q'+ (i+1) +'. ' + this.service.finalQuestions[i].question,10,(gap+10));
    doc.setFontSize(12);
    doc.text('A. ' + this.service.finalQuestions[i].answer_one,10,(gap+20));
    doc.text('B. ' + this.service.finalQuestions[i].answer_two,10,(gap+30));
    doc.text('C. ' + this.service.finalQuestions[i].answer_three,10,(gap+40));
    doc.text('D. ' + this.service.finalQuestions[i].answer_four,10,(gap+50));
    gap = gap + 60;
  }

  doc.addPage();
  doc.setFontSize(22);
  doc.setFontStyle("bold");
  doc.text('Answer Keys', 80, 20 );

  doc.setFontSize(16);
  doc.setFontStyle("normal");
  var y = 40;
  for(var j = 0; j<this.service.finalQuestions.length; j++){
    doc.text('Question '+ (j+1) + ':    Option ' + this.service.finalQuestions[j].correct_answer,20,(y+j*10));
  }





  doc.save('QuestionPaper.pdf');


}

}
