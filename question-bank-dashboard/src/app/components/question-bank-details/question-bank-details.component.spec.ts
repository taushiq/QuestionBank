import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankDetailsComponent } from './question-bank-details.component';

describe('QuestionBankDetailsComponent', () => {
  let component: QuestionBankDetailsComponent;
  let fixture: ComponentFixture<QuestionBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
